'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Home, User, LogIn, UserPlus, LogOut } from 'lucide-react';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              MyApp
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
            ) : session ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <Home className="h-5 w-5 mr-1" />
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}