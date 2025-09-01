'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import AvatarDropdown from './AvatarDropdown';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ease-in-out ${
    isScrolled 
      ? 'bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 text-white' 
      : 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 text-white border-b border-white/20 shadow-lg backdrop-blur-md'
  }`;

  const services = [
    { name: t('services.vpn_services'), href: '/vpn', description: t('services.vpn_services_desc') },
    { name: t('services.web_development'), href: '/web', description: t('services.web_development_desc') },
    { name: t('services.digital_shop'), href: '/shop', description: t('services.digital_shop_desc') }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold transition-colors text-white hover:text-cyan-400">
            swdRana
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 transition-colors text-white hover:text-cyan-400"
              >
                <span>{t('nav.services')}</span>
                <ChevronDown size={16} className={`transition-transform ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-base-100 rounded-lg shadow-xl border border-base-300 z-50">
                  <div className="p-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-base-200 transition-colors group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="font-medium text-base-content group-hover:text-primary">
                          {service.name}
                        </div>
                        <div className="text-sm text-base-content/80 mt-1">
                          {service.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/about" className="transition-colors text-white hover:text-cyan-400">
              {t('nav.about')}
            </Link>
            
            <Link href="/contact" className="transition-colors text-white hover:text-cyan-400">
              {t('nav.contact')}
            </Link>
            
            <Link href="/blogs" className="transition-colors text-white hover:text-cyan-400">
              {t('nav.blogs')}
            </Link>
            
            <Link href="/portfolio" className="transition-colors text-white hover:text-cyan-400">
              {t('nav.portfolio')}
            </Link>
            
            <AvatarDropdown />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors text-white hover:bg-white/20"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className={`absolute right-0 top-0 h-screen w-72 max-w-[85vw] bg-base-100 shadow-xl transform transition-transform duration-300 overflow-y-auto border-l border-base-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-4 pt-6 min-h-full">
              {/* Close button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-base-content">{t('nav.menu')}</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-base-200 text-base-content transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {/* Services Section */}
                <div>
                  <h3 className="text-base font-semibold text-base-content mb-2">{t('nav.services')}</h3>
                  <div className="space-y-1 ml-3">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block py-2 px-2 rounded-lg text-base-content hover:text-primary hover:bg-base-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-base-content/70 mt-1">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="divider my-3"></div>
                
                {/* Other Links */}
                <Link 
                  href="/about" 
                  className="block py-2 px-2 rounded-lg text-base-content hover:text-primary hover:bg-base-200 transition-colors font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                
                <Link 
                  href="/contact" 
                  className="block py-2 px-2 rounded-lg text-base-content hover:text-primary hover:bg-base-200 transition-colors font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
                
                <Link 
                  href="/blogs" 
                  className="block py-2 px-2 rounded-lg text-base-content hover:text-primary hover:bg-base-200 transition-colors font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.blogs')}
                </Link>
                
                <Link 
                  href="/portfolio" 
                  className="block py-2 px-2 rounded-lg text-base-content hover:text-primary hover:bg-base-200 transition-colors font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.portfolio')}
                </Link>
                
                <div className="divider my-3"></div>
                
                {/* Language Switcher */}
                <div className="mb-3">
                  <h3 className="text-base font-semibold text-base-content mb-2">{t('nav.language')}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
                        language === 'en' 
                          ? 'bg-primary text-primary-content' 
                          : 'bg-base-200 text-base-content hover:bg-base-300'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage('bn')}
                      className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
                        language === 'bn' 
                          ? 'bg-primary text-primary-content' 
                          : 'bg-base-200 text-base-content hover:bg-base-300'
                      }`}
                    >
                      বাংলা
                    </button>
                  </div>
                </div>
                
                {/* Theme Toggle */}
                <div>
                  <h3 className="text-base font-semibold text-base-content mb-2">{t('nav.theme')}</h3>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 bg-base-200 hover:bg-base-300 rounded-lg transition-colors text-base-content text-sm w-full"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    <span>{theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;