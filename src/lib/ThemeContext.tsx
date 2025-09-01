'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

type Theme = 'system' | 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [theme, setTheme] = useState<Theme>('system');
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from localStorage or user preferences
  useEffect(() => {
    // First try to get from localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme && ['system', 'dark', 'light'].includes(storedTheme)) {
      setTheme(storedTheme);
      setIsLoading(false);
      return;
    }
    
    // If user is logged in, try to fetch their preference from API
    if (session?.user) {
      fetch('/api/user/theme')
        .then(res => res.json())
        .then(data => {
          if (data.theme && ['system', 'dark', 'light'].includes(data.theme)) {
            setTheme(data.theme);
            localStorage.setItem('theme', data.theme);
          }
        })
        .catch(err => console.error('Error fetching theme preference:', err))
        .finally(() => setIsLoading(false));
    } else {
      // Default to system
      setIsLoading(false);
    }
  }, [session]);

  // Apply theme to document
  useEffect(() => {
    if (isLoading) return;
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    let appliedTheme = theme;
    if (theme === 'system') {
      appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Apply theme class
    root.classList.add(appliedTheme);
    
    // Set data-theme attribute for DaisyUI
    root.setAttribute('data-theme', appliedTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // If user is logged in, save to database
    if (session?.user) {
      fetch('/api/user/theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme }),
      }).catch(err => console.error('Error saving theme preference:', err));
    }
  }, [theme, isLoading, session]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const root = window.document.documentElement;
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
      root.setAttribute('data-theme', systemTheme);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    isLoading,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}