import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// GET - Fetch all blogs with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const published = searchParams.get('published') !== 'false'; // Default to true
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query: {
      published: boolean;
      category?: string;
      $or?: Array<{
        [key: string]: { $regex: string; $options: string } | { $gte: number };
      }>;
    } = { published };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { 'title.en': { $regex: search, $options: 'i' } },
        { 'title.bn': { $regex: search, $options: 'i' } },
        { 'excerpt.en': { $regex: search, $options: 'i' } },
        { 'excerpt.bn': { $regex: search, $options: 'i' } }
      ];
    }
    
    if (featured === 'true') {
      // For featured blogs, we'll use views and likes as criteria
      query.$or = [
        { views: { $gte: 100 } },
        { likes: { $gte: 10 } }
      ];
    }
    
    const blogs = await Blog.find(query)
      .populate('author', 'name email')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    const total = await Blog.countDocuments(query);
    
    return NextResponse.json({
      success: true,
      blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST - Create a new blog
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const {
      title,
      excerpt,
      content,
      category,
      tags,
      featuredImage,
      published = false
    } = await request.json();
    
    // Validation
    if (!title?.en || !title?.bn || !excerpt?.en || !excerpt?.bn || !content?.en || !content?.bn || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.en.split(' ').length;
    const readTime = Math.ceil(wordCount / 200);
    
    // Find user by email to get user ID
    const User = (await import('@/models/User')).default;
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    const blog = await Blog.create({
      title,
      excerpt,
      content,
      category,
      tags: tags || [],
      featuredImage,
      author: user._id,
      published,
      readTime,
      publishedAt: published ? new Date() : null
    });
    
    const populatedBlog = await Blog.findById(blog._id).populate('author', 'name email');
    
    return NextResponse.json({
      success: true,
      blog: populatedBlog
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}