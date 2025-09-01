'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, LogIn, UserPlus, ChevronDown, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AvatarDropdown() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
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
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-base-200 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {session?.user ? (
          <>
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {session.user.name?.charAt(0).toUpperCase() || session.user.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <ChevronDown className={`h-4 w-4 text-base-content/80 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        ) : (
          <>
            <div className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-base-content/80" />
            </div>
            <ChevronDown className={`h-4 w-4 text-base-content/80 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-base-100 rounded-lg shadow-lg border border-base-300 py-1 z-50">
          {session?.user ? (
            // Logged in menu
            <>
              <div className="px-4 py-3 border-b border-base-300">
                <p className="text-sm font-medium text-base-content">
                  {session.user.name || 'User'}
                </p>
                <p className="text-sm text-base-content/70 truncate">
                  {session.user.email}
                </p>
              </div>
              
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 text-sm text-base-content hover:bg-base-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="h-4 w-4 mr-3" />
                Dashboard
              </Link>
              
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 text-sm text-base-content hover:bg-base-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4 mr-3" />
                Profile
              </Link>
              
              <div className="border-t border-base-300 my-1"></div>
              
              {/* Theme Toggle Section */}
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-base-content/80 mb-2">{t('avatar.theme')}</p>
                <div className="flex items-center justify-between space-x-1">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      theme === 'light' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/80 hover:bg-base-200'
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => setTheme('system')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      theme === 'system' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/80 hover:bg-base-200'
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      theme === 'dark' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/60 hover:bg-base-200'
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Language Toggle Section */}
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-base-content/80 mb-2">{t('avatar.language')}</p>
                <div className="flex items-center justify-between space-x-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      language === 'en' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/80 hover:bg-base-200'
                    }`}
                  >
                    <span className="text-xs font-medium">{t('avatar.english')}</span>
                  </button>
                  
                  <button
                    onClick={() => setLanguage('bn')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      language === 'bn' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/80 hover:bg-base-200'
                    }`}
                  >
                    <span className="text-xs font-medium">{t('avatar.bangla')}</span>
                  </button>
                </div>
              </div>
              
              <div className="border-t border-base-300 my-1"></div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut({ callbackUrl: '/login' });
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-error hover:bg-error/10 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-3" />
                Logout
              </button>
            </>
          ) : (
            // Not logged in menu
            <>
              {/* Theme Toggle Section for non-logged users */}
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-base-content/80 mb-2">{t('avatar.theme')}</p>
                <div className="flex items-center justify-between space-x-1">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      theme === 'light' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/60 hover:bg-base-200'
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => setTheme('system')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      theme === 'system' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/60 hover:bg-base-200'
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      theme === 'dark' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/60 hover:bg-base-200'
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Language Toggle Section for non-logged users */}
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-base-content/80 mb-2">{t('avatar.language')}</p>
                <div className="flex items-center justify-between space-x-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      language === 'en' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/80 hover:bg-base-200'
                    }`}
                  >
                    <span className="text-xs font-medium">{t('avatar.english')}</span>
                  </button>
                  
                  <button
                    onClick={() => setLanguage('bn')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
                      language === 'bn' 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content/80 hover:bg-base-200'
                    }`}
                  >
                    <span className="text-xs font-medium">{t('avatar.bangla')}</span>
                  </button>
                </div>
              </div>
              
              <div className="border-t border-base-300 my-1"></div>
              
              <Link
                href="/login"
                className="flex items-center px-4 py-2 text-sm text-base-content hover:bg-base-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4 mr-3" />
                Login
              </Link>
              
              <Link
                href="/register"
                className="flex items-center px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
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