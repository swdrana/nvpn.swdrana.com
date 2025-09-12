'use client';

import { useEffect, useRef } from 'react';

interface ScrollEffectsProps {
  children: React.ReactNode;
  className?: string;
  stickyTop?: boolean;
  parallaxSpeed?: number;
}

export default function ScrollEffects({ 
  children, 
  className = '', 
  stickyTop = false, 
  parallaxSpeed = 0.5 
}: ScrollEffectsProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -parallaxSpeed;

      // Parallax effect
      if (parallaxSpeed !== 0) {
        element.style.transform = `translateY(${rate}px)`;
      }

      // Sticky effect with fade out
      if (stickyTop) {
        const windowHeight = window.innerHeight;
        const elementHeight = element.offsetHeight;
        
        if (rect.top <= 0 && rect.bottom > windowHeight) {
          element.style.position = 'fixed';
          element.style.top = '0';
          element.style.zIndex = '10';
        } else if (rect.top > 0) {
          element.style.position = 'relative';
          element.style.top = 'auto';
          element.style.zIndex = 'auto';
        } else if (rect.bottom <= windowHeight) {
          element.style.position = 'absolute';
          element.style.top = `${scrolled + windowHeight - elementHeight}px`;
          element.style.zIndex = 'auto';
        }
      }

      // Fade in/out based on scroll position
      const opacity = Math.max(0, Math.min(1, 1 - Math.abs(rect.top) / window.innerHeight));
      element.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallaxSpeed, stickyTop]);

  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

// Apple-style section wrapper
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
    <ScrollEffects 
      className={`min-h-screen flex items-center justify-center ${backgroundColor} ${className}`}
      stickyTop={sticky}
    >
      <div className="w-full">
        {children}
      </div>
    </ScrollEffects>
  );
}