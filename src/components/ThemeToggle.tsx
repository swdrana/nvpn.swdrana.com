'use client';

import { useTheme } from '@/lib/ThemeContext';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, isLoading } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return <div className="w-9 h-9"></div>; // Placeholder to avoid layout shift
  }

  return (
    <div className="relative inline-block">
      <div className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md transition-all duration-300">
        <button
          onClick={() => setTheme('light')}
          className={`p-2 rounded-md transition-all duration-300 ${theme === 'light' ? 'bg-pink-100 text-pink-600 shadow-sm' : 'text-gray-500 hover:text-pink-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          aria-label="Light mode"
        >
          <Sun className="h-5 w-5" />
        </button>
        
        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-md transition-all duration-300 ${theme === 'system' ? 'bg-pink-100 text-pink-600 shadow-sm' : 'text-gray-500 hover:text-pink-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          aria-label="System theme"
        >
          <Monitor className="h-5 w-5" />
        </button>
        
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-md transition-all duration-300 ${theme === 'dark' ? 'bg-pink-100 text-pink-600 shadow-sm dark:bg-gray-700 dark:text-pink-400' : 'text-gray-500 hover:text-pink-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          aria-label="Dark mode"
        >
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}