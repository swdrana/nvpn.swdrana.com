'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AvatarDropdown from './AvatarDropdown';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled 
      ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg border-b border-white/30 dark:border-gray-700/30 shadow-lg' 
      : 'bg-primary-600 dark:bg-primary-800 border-b border-primary-500 dark:border-primary-700 shadow-sm'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={`text-xl font-bold transition-colors ${
            isScrolled 
              ? 'text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400' 
              : 'text-white hover:text-primary-100'
          }`}>
            swdRana
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;