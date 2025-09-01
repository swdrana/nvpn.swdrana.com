'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  type?: AnimationType;
  animation?: string; // Alternative to type for backward compatibility
  delay?: number; // delay in ms
  threshold?: number; // 0 to 1, default 0.1
  className?: string;
}

export default function AnimateOnScroll({
  children,
  type,
  animation,
  delay = 0,
  threshold = 0.1,
  className = '',
}: AnimateOnScrollProps) {
  // Use animation prop if provided, otherwise use type
  const animationType = animation || type || 'fade-in';
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  // Initial styles based on animation type
  const getInitialStyles = () => {
    switch (animationType) {
      case 'fade-in':
      case 'fade-in-up':
      case 'fade-in-left':
      case 'fade-in-right':
        return 'opacity-0';
      case 'slide-up':
        return 'opacity-0 translate-y-10';
      case 'slide-down':
        return 'opacity-0 -translate-y-10';
      case 'slide-left':
      case 'fade-in-left':
        return 'opacity-0 translate-x-10';
      case 'slide-right':
      case 'fade-in-right':
        return 'opacity-0 -translate-x-10';
      default:
        return 'opacity-0';
    }
  };

  // Animation classes
  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-in-out';
    
    if (!isVisible) {
      return `${baseClass} ${getInitialStyles()}`;
    }
    
    switch (animationType) {
      case 'fade-in':
        return `${baseClass} opacity-100`;
      case 'fade-in-up':
        return `${baseClass} opacity-100 translate-y-0`;
      case 'fade-in-left':
        return `${baseClass} opacity-100 translate-x-0`;
      case 'fade-in-right':
        return `${baseClass} opacity-100 translate-x-0`;
      default:
        return `${baseClass} opacity-100 translate-x-0 translate-y-0`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}