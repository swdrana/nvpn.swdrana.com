import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import LanguageSettings from '@/models/LanguageSettings';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// GET - Get user's language preference
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const session = await getServerSession(authOptions);
    const sessionId = request.headers.get('x-session-id');
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    
    let languageSettings;
    
    if (session?.user?.email) {
      // For logged-in users
      languageSettings = await LanguageSettings.findOne({ userId: session.user.email });
    } else if (sessionId) {
      // For guest users with session ID
      languageSettings = await LanguageSettings.findOne({ sessionId });
    } else if (ipAddress) {
      // Fallback to IP address
      languageSettings = await LanguageSettings.findOne({ ipAddress });
    }
    
    return NextResponse.json({
      language: languageSettings?.language || 'en'
    });
  } catch (error) {
    console.error('Error fetching language settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch language settings' },
      { status: 500 }
    );
  }
}

// POST - Save user's language preference
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const { language } = await request.json();
    
    if (!language || !['en', 'bn'].includes(language)) {
      return NextResponse.json(
        { error: 'Invalid language' },
        { status: 400 }
      );
    }
    
    const session = await getServerSession(authOptions);
    const sessionId = request.headers.get('x-session-id');
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    
    let languageSettings;
    
    if (session?.user?.email) {
      // For logged-in users
      languageSettings = await LanguageSettings.findOneAndUpdate(
        { userId: session.user.email },
        { 
          userId: session.user.email,
          language,
          ipAddress
        },
        { upsert: true, new: true }
      );
    } else if (sessionId) {
      // For guest users with session ID
      languageSettings = await LanguageSettings.findOneAndUpdate(
        { sessionId },
        { 
          sessionId,
          language,
          ipAddress
        },
        { upsert: true, new: true }
      );
    } else if (ipAddress) {
      // Fallback to IP address
      languageSettings = await LanguageSettings.findOneAndUpdate(
        { ipAddress },
        { 
          ipAddress,
          language
        },
        { upsert: true, new: true }
      );
    }
    
    return NextResponse.json({
      success: true,
      language: languageSettings?.language || language
    });
  } catch (error) {
    console.error('Error saving language settings:', error);
    return NextResponse.json(
      { error: 'Failed to save language settings' },
      { status: 500 }
    );
  }
}