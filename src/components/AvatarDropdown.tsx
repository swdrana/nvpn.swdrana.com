'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, LogIn, UserPlus, ChevronDown } from 'lucide-react';

export default function AvatarDropdown() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (status === 'loading') {
    return (
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {session?.user ? (
          <>
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {session.user.name?.charAt(0).toUpperCase() || session.user.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <ChevronDown className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        ) : (
          <>
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </div>
            <ChevronDown className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          {session?.user ? (
            // Logged in menu
            <>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {session.user.name || 'User'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {session.user.email}
                </p>
              </div>
              
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="h-4 w-4 mr-3" />
                Dashboard
              </Link>
              
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4 mr-3" />
                Profile
              </Link>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut({ callbackUrl: '/login' });
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-3" />
                Logout
              </button>
            </>
          ) : (
            // Not logged in menu
            <>
              <Link
                href="/login"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4 mr-3" />
                Login
              </Link>
              
              <Link
                href="/register"
                className="flex items-center px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="h-4 w-4 mr-3" />
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}