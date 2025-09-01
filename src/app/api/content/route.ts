import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import WebsiteContent from '@/models/WebsiteContent';

// GET - Get website content by category or all content
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const key = searchParams.get('key');
    
    const query: { isActive: boolean; category?: string; key?: string } = { isActive: true };
    
    if (category) {
      query.category = category;
    }
    
    if (key) {
      query.key = key;
    }
    
    const content = await WebsiteContent.find(query).sort({ key: 1 });
    
    // Transform to key-value pairs for easy access
    const transformedContent: { [key: string]: { en: string; bn: string } } = {};
    
    content.forEach(item => {
      transformedContent[item.key] = {
        en: item.content.en,
        bn: item.content.bn
      };
    });
    
    return NextResponse.json({
      success: true,
      content: transformedContent
    });
  } catch (error) {
    console.error('Error fetching website content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch website content' },
      { status: 500 }
    );
  }
}

// POST - Create or update website content (Admin only)
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const { key, content, category, description } = await request.json();
    
    if (!key || !content || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (!content.en || !content.bn) {
      return NextResponse.json(
        { error: 'Both English and Bengali content are required' },
        { status: 400 }
      );
    }
    
    const websiteContent = await WebsiteContent.findOneAndUpdate(
      { key },
      { 
        key,
        content,
        category,
        description,
        isActive: true
      },
      { upsert: true, new: true }
    );
    
    return NextResponse.json({
      success: true,
      content: websiteContent
    });
  } catch (error) {
    console.error('Error saving website content:', error);
    return NextResponse.json(
      { error: 'Failed to save website content' },
      { status: 500 }
    );
  }
}