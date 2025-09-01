import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

// GET - Fetch a single blog by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    
    const { slug } = params;
    
    const blog = await Blog.findOne({ slug, published: true })
      .populate('author', 'name email')
      .lean();
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    // Increment view count
    await Blog.findByIdAndUpdate((blog as any)._id, { $inc: { views: 1 } });
    
    return NextResponse.json({
      success: true,
      blog: {
        ...blog,
        views: ((blog as any).views || 0) + 1
      }
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT - Update a blog
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const { slug } = params;
    const updateData = await request.json();
    
    // Find user by email to get user ID
    const User = (await import('@/models/User')).default;
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Find the blog and check if user is the author
    const blog = await Blog.findOne({ slug });
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    if (blog.author.toString() !== (user as any)._id.toString()) {
      return NextResponse.json(
        { error: 'Unauthorized to update this blog' },
        { status: 403 }
      );
    }
    
    // Calculate read time if content is updated
    if (updateData.content?.en) {
      const wordCount = updateData.content.en.split(' ').length;
      updateData.readTime = Math.ceil(wordCount / 200);
    }
    
    // Update publishedAt if publishing for the first time
    if (updateData.published && !blog.published) {
      updateData.publishedAt = new Date();
    }
    
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      updateData,
      { new: true, runValidators: true }
    ).populate('author', 'name email');
    
    return NextResponse.json({
      success: true,
      blog: updatedBlog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const { slug } = params;
    
    // Find user by email to get user ID
    const User = (await import('@/models/User')).default;
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Find the blog and check if user is the author
    const blog = await Blog.findOne({ slug });
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    if (blog.author.toString() !== (user as any)._id.toString()) {
      return NextResponse.json(
        { error: 'Unauthorized to delete this blog' },
        { status: 403 }
      );
    }
    
    await Blog.findOneAndDelete({ slug });
    
    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}