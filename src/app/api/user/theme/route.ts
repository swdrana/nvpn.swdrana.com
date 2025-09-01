import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

// GET endpoint to fetch user's theme preference
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email }).select('theme');

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { theme: user.theme || 'system' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching theme preference:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching theme preference' },
      { status: 500 }
    );
  }
}

// POST endpoint to update user's theme preference
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { theme } = await req.json();

    if (!theme || !['system', 'dark', 'light'].includes(theme)) {
      return NextResponse.json(
        { error: 'Invalid theme value' },
        { status: 400 }
      );
    }

    await dbConnect();

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { theme },
      { new: true }
    ).select('theme');

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Theme preference updated successfully', theme: updatedUser.theme },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating theme preference:', error);
    return NextResponse.json(
      { error: 'An error occurred while updating theme preference' },
      { status: 500 }
    );
  }
}