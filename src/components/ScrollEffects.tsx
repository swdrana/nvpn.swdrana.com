'use client';

import { useEffect, useRef } from 'react';

interface ScrollEffectsProps {
  children: React.ReactNode;
  className?: string;
  stickyTop?: boolean;
}

export default function ScrollEffects({ 
  children, 
  className = '', 
  stickyTop = false
}: ScrollEffectsProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Simple fade in effect when element comes into view
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      const opacity = isVisible ? 1 : 0.3;
      element.style.opacity = opacity.toString();
      
      // Simple scale effect
      const scale = isVisible ? 1 : 0.95;
      element.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyTop]);

  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-500 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

// Simple section wrapper without complex effects
export function AppleSection({ 
  children, 
  className = '', 
  backgroundColor = 'bg-white dark:bg-gray-900',
  sticky = false 
}: {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  sticky?: boolean;
}) {
  return (
    <section className={`min-h-screen ${backgroundColor} ${className}`}>
      <div className="w-full h-full">
        {children}
      </div>
    </section>
  );
}