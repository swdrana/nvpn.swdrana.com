import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

// POST - Like/Unlike a blog
export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    
    const { slug } = params;
    
    const blog = await Blog.findOne({ slug, published: true });
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    // Increment like count
    const updatedBlog = await Blog.findByIdAndUpdate(
      blog._id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    
    return NextResponse.json({
      success: true,
      likes: updatedBlog?.likes || 0
    });
  } catch (error) {
    console.error('Error liking blog:', error);
    return NextResponse.json(
      { error: 'Failed to like blog' },
      { status: 500 }
    );
  }
}