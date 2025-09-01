'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.blogs': 'Blogs',
    'nav.portfolio': 'Portfolio',
    'nav.menu': 'Menu',
    'nav.language': 'Language',
    'nav.theme': 'Theme',
    'nav.darkMode': 'Dark Mode',
    'nav.lightMode': 'Light Mode',
    
    // Services
    'services.vpn_services': 'VPN Services',
    'services.vpn_services_desc': 'Secure & High Speed VPN',
    'services.web_development': 'Web Development',
    'services.web_development_desc': 'Professional Web Solutions',
    'services.digital_shop': 'Digital Shop',
    'services.digital_shop_desc': 'Premium Digital Services',
    'services.mobile_app': 'Mobile App Development',
    'services.mobile_app_desc': 'iOS and Android applications',
    'services.ui_ux': 'UI/UX Design',
    'services.ui_ux_desc': 'User-centered design solutions',
    'services.digital_marketing': 'Digital Marketing',
    'services.digital_marketing_desc': 'SEO, social media, and more',
    
    // Home page
    'home.hero.title': 'Building Digital Excellence',
    'home.hero.subtitle': 'We create stunning websites, mobile apps, and digital solutions that drive your business forward.',
    'home.hero.cta': 'Get Started',
    'home.hero.learn_more': 'Learn More',
    
    // Blogs
    'blogs.title': 'Latest Insights',
    'blogs.subtitle': 'Stay updated with the latest trends in technology, web development, and cybersecurity.',
    'blogs.search_placeholder': 'Search articles...',
    'blogs.all_categories': 'All Categories',
    'blogs.featured_articles': 'Featured Articles',
    'blogs.all_posts': 'All Posts',
    'blogs.no_articles': 'No articles found matching your criteria.',
    'blogs.read_more': 'Read More',
    'blogs.newsletter.title': 'Stay Updated',
    'blogs.newsletter.subtitle': 'Get the latest insights delivered to your inbox',
    'blogs.newsletter.email_placeholder': 'Enter your email',
    'blogs.newsletter.subscribe': 'Subscribe',
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Showcasing my journey in software development and design',
    'portfolio.projects': 'Projects',
    'portfolio.skills': 'Skills',
    'portfolio.experience': 'Experience',
    'portfolio.education': 'Education',
    'portfolio.certifications': 'Certifications',
    'portfolio.contact': 'Contact',
    
    // Avatar Dropdown
    'avatar.theme': 'Theme',
    'avatar.light': 'Light',
    'avatar.dark': 'Dark',
    'avatar.system': 'System',
    'avatar.language': 'Language',
    'avatar.english': 'English',
    'avatar.bangla': 'বাংলা',
  },
  bn: {
    // Navbar
    'nav.services': 'সেবাসমূহ',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    'nav.blogs': 'ব্লগ',
    'nav.portfolio': 'পোর্টফোলিও',
    'nav.menu': 'মেনু',
    'nav.language': 'ভাষা',
    'nav.theme': 'থিম',
    'nav.darkMode': 'ডার্ক মোড',
    'nav.lightMode': 'লাইট মোড',
    
    // Services
    'services.vpn_services': 'VPN সেবা',
    'services.vpn_services_desc': 'নিরাপদ ও উচ্চ গতির VPN',
    'services.web_development': 'ওয়েব ডেভেলপমেন্ট',
    'services.web_development_desc': 'পেশাদার ওয়েব সমাধান',
    'services.digital_shop': 'ডিজিটাল শপ',
    'services.digital_shop_desc': 'প্রিমিয়াম ডিজিটাল সেবা',
    'services.mobile_app': 'মোবাইল অ্যাপ ডেভেলপমেন্ট',
    'services.mobile_app_desc': 'iOS এবং Android অ্যাপ্লিকেশন',
    'services.ui_ux': 'UI/UX ডিজাইন',
    'services.ui_ux_desc': 'ব্যবহারকারী-কেন্দ্রিক ডিজাইন সমাধান',
    'services.digital_marketing': 'ডিজিটাল মার্কেটিং',
    'services.digital_marketing_desc': 'SEO, সোশ্যাল মিডিয়া এবং আরও',
    
    // Home page
    'home.hero.title': 'ডিজিটাল উৎকর্ষতা নির্মাণ',
    'home.hero.subtitle': 'আমরা অসাধারণ ওয়েবসাইট, মোবাইল অ্যাপ এবং ডিজিটাল সমাধান তৈরি করি যা আপনার ব্যবসাকে এগিয়ে নিয়ে যায়।',
    'home.hero.cta': 'শুরু করুন',
    'home.hero.learn_more': 'আরও জানুন',
    
    // Blogs
    'blogs.title': 'সর্বশেষ অন্তর্দৃষ্টি',
    'blogs.subtitle': 'প্রযুক্তি, ওয়েব ডেভেলপমেন্ট এবং সাইবার নিরাপত্তার সর্বশেষ ট্রেন্ডের সাথে আপডেট থাকুন।',
    'blogs.search_placeholder': 'আর্টিকেল খুঁজুন...',
    'blogs.all_categories': 'সব ক্যাটেগরি',
    'blogs.featured_articles': 'ফিচার্ড আর্টিকেল',
    'blogs.all_posts': 'সব পোস্ট',
    'blogs.no_articles': 'আপনার মানদণ্ড অনুযায়ী কোন আর্টিকেল পাওয়া যায়নি।',
    'blogs.read_more': 'আরও পড়ুন',
    'blogs.newsletter.title': 'আপডেট থাকুন',
    'blogs.newsletter.subtitle': 'সর্বশেষ অন্তর্দৃষ্টি আপনার ইনবক্সে পান',
    'blogs.newsletter.email_placeholder': 'আপনার ইমেইল লিখুন',
    'blogs.newsletter.subscribe': 'সাবস্ক্রাইব করুন',
    
    // Portfolio
    'portfolio.title': 'আমার পোর্টফোলিও',
    'portfolio.subtitle': 'সফটওয়্যার ডেভেলপমেন্ট এবং ডিজাইনে আমার যাত্রা প্রদর্শন',
    'portfolio.projects': 'প্রকল্পসমূহ',
    'portfolio.skills': 'দক্ষতা',
    'portfolio.experience': 'অভিজ্ঞতা',
    'portfolio.education': 'শিক্ষা',
    'portfolio.certifications': 'সার্টিফিকেশন',
    'portfolio.contact': 'যোগাযোগ',
    
    // Avatar Dropdown
    'avatar.theme': 'থিম',
    'avatar.light': 'হালকা',
    'avatar.dark': 'গাঢ়',
    'avatar.system': 'সিস্টেম',
    'avatar.language': 'ভাষা',
    'avatar.english': 'English',
    'avatar.bangla': 'বাংলা',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [dbTranslations, setDbTranslations] = useState<{ [key: string]: { en: string; bn: string } }>({});
  const [isLoading, setIsLoading] = useState(true);

  // Generate session ID for guest users
  const getSessionId = () => {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = 'guest_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  // Fetch language preference and content from database
  useEffect(() => {
    const fetchLanguageAndContent = async () => {
      try {
        const sessionId = getSessionId();
        
        // Fetch language preference
        const langResponse = await fetch('/api/language', {
          headers: {
            'x-session-id': sessionId
          }
        });
        
        if (langResponse.ok) {
          const langData = await langResponse.json();
          setLanguageState(langData.language || 'en');
        }
        
        // Fetch website content
        const contentResponse = await fetch('/api/content');
        if (contentResponse.ok) {
          const contentData = await contentResponse.json();
          if (contentData.success) {
            setDbTranslations(contentData.content);
          }
        }
      } catch (error) {
        console.error('Error fetching language and content:', error);
        // Fallback to localStorage
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && ['en', 'bn'].includes(savedLanguage)) {
          setLanguageState(savedLanguage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchLanguageAndContent();
  }, []);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Save to database
    try {
      const sessionId = getSessionId();
      await fetch('/api/language', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-session-id': sessionId
        },
        body: JSON.stringify({ language: lang })
      });
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  const t = (key: string): string => {
    // First try database translations, then fallback to static translations
    if (dbTranslations[key]) {
      return dbTranslations[key][language] || dbTranslations[key]['en'] || key;
    }
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};