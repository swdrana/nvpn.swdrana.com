'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, User, ArrowRight, Tag, Mail, ChevronRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

interface Blog {
  _id: string;
  title: {
    en: string;
    bn: string;
  };
  excerpt: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  slug: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  author: {
    name: string;
    email: string;
  };
  readTime: number;
  publishedAt: string;
  isPublished: boolean;
}

export default function BlogsPage() {
  const { language, t } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        published: 'true'
      });
      
      if (searchTerm) params.append('search', searchTerm);
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      
      const response = await fetch(`/api/blogs?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.blogs);
        setTotalPages(Math.ceil(data.total / limit));
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFeaturedBlogs = async () => {
    try {
      const response = await fetch('/api/blogs?featured=true&limit=3&published=true');
      const data = await response.json();
      
      if (data.success) {
        setFeaturedBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, searchTerm, selectedCategory]);

  useEffect(() => {
    fetchFeaturedBlogs();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchBlogs();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-black dark:text-white">{t('blog') || 'Blog'}</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                {t('blogDescription') || 'Discover insights, tutorials, and stories from the world of technology and development.'}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Search and Filter */}
          <AnimateOnScroll animation="fade-in-up" delay={0.2}>
            <div className="max-w-4xl mx-auto mb-16">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 dark:text-white/40" size={20} />
                  <input
                    type="text"
                    placeholder={t('searchBlogs') || 'Search blogs...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  {t('search') || 'Search'}
                </button>
              </form>

              <div className="flex flex-wrap gap-3 justify-center">
                {['all', 'Technology', 'Web Development', 'Programming', 'Design', 'Tutorial'].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-3 rounded-full transition-all hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary'
                    }`}
                  >
                    {t(category.toLowerCase()) || category}
                  </button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-black dark:text-white">{t('featuredPosts') || 'Featured Posts'}</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => (
                <AnimateOnScroll 
                  key={blog._id} 
                  animation="fade-in-up" 
                  delay={index * 0.1}
                >
                  <article className="card bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border border-gray-200 dark:border-gray-700 overflow-hidden group">
                    {blog.featuredImage && (
                      <figure className="relative overflow-hidden">
                        <img 
                          src={blog.featuredImage} 
                          alt={blog.title[language as 'en' | 'bn']}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="badge badge-primary">{t('featured') || 'Featured'}</span>
                        </div>
                      </figure>
                    )}
                    <div className="card-body p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="badge badge-outline">{blog.category}</span>
                      </div>
                      
                      <h3 className="card-title text-xl font-bold mb-3 text-black dark:text-white hover:text-primary transition-colors">
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.title[language as 'en' | 'bn']}
                        </Link>
                      </h3>
                      
                      <p className="text-black/80 dark:text-white/80 mb-4 line-clamp-3">{blog.excerpt[language as 'en' | 'bn']}</p>
                      
                      <div className="flex items-center justify-between text-sm text-black/60 dark:text-white/60 mb-4">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {blog.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {blog.readTime} min read
                        </span>
                      </div>
                      
                      <div className="card-actions justify-between items-center">
                        <span className="text-sm text-black/60 dark:text-white/60">
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </span>
                        <Link 
                          href={`/blogs/${blog.slug}`}
                          className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                        >
                          {t('readMore') || 'Read More'}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-black dark:text-white">
                  {selectedCategory === 'all' ? (t('all_articles') || 'All Articles') : `${selectedCategory} ${t('articles') || 'Articles'}`}
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              <p className="text-lg text-black/70 dark:text-white/70 mt-4 max-w-2xl mx-auto">
                {blogs.length} {t('articlesFound') || 'Articles Found'}
              </p>
            </div>
          </AnimateOnScroll>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="loading loading-spinner loading-lg"></div>
              <p className="text-lg text-black/60 dark:text-white/60 mt-4">{t('loading') || 'Loading...'}</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-black/60 dark:text-white/60">{t('noArticlesFound') || 'No Articles Found Matching Your Criteria.'}</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  fetchBlogs();
                }}
                className="btn btn-primary mt-4"
              >
                {t('clearFilters') || 'Clear Filters'}
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <AnimateOnScroll 
                    key={blog._id} 
                    animation="fade-in-up" 
                    delay={index * 0.1}
                  >
                    <article className="card bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border border-gray-200 dark:border-gray-700 overflow-hidden group backdrop-blur-sm">
                      {blog.featuredImage && (
                        <figure className="relative overflow-hidden">
                          <img 
                            src={blog.featuredImage} 
                            alt={blog.title[language as 'en' | 'bn']}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </figure>
                      )}
                      <div className="card-body p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="badge badge-primary">{blog.category}</span>
                        </div>
                        
                        <h3 className="card-title text-lg font-bold mb-3 text-black dark:text-white hover:text-primary transition-colors flex-grow-0">
                          <Link href={`/blogs/${blog.slug}`}>
                            {blog.title[language as 'en' | 'bn']}
                          </Link>
                        </h3>
                        
                        <p className="text-black/80 dark:text-white/80 mb-4 line-clamp-3 flex-grow">{blog.excerpt[language as 'en' | 'bn']}</p>
                        
                        <div className="flex items-center justify-between text-sm text-black/60 dark:text-white/60 mb-4">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {blog.author.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {blog.readTime} min read
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="badge badge-ghost text-xs">{tag}</span>
                          ))}
                        </div>
                        
                        <div className="card-actions justify-between items-center mt-auto">
                          <span className="text-sm text-black/60 dark:text-white/60">
                            {new Date(blog.publishedAt).toLocaleDateString()}
                          </span>
                          <Link 
                            href={`/blogs/${blog.slug}`}
                            className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                          >
                            {t('readMore') || 'Read More'}
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="join">
                    <button 
                      className="join-item btn" 
                      disabled={page === 1}
                      onClick={() => setPage(page - 1)}
                    >
                      {t('previous') || 'Previous'}
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        className={`join-item btn ${page === pageNum ? 'btn-active' : ''}`}
                        onClick={() => setPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    ))}
                    
                    <button 
                      className="join-item btn" 
                      disabled={page === totalPages}
                      onClick={() => setPage(page + 1)}
                    >
                      {t('next') || 'Next'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
                {t('stayUpdated') || 'Stay Updated'}
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70 mb-8">
                {t('newsletterDescription') || 'Subscribe to Our Newsletter and Get the Latest Articles Delivered to Your Inbox.'}
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('enterEmail') || 'Enter Your Email'}
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="btn btn-primary px-8 py-4 rounded-xl hover:scale-105 transition-transform whitespace-nowrap"
                >
                  {t('subscribe') || 'Subscribe'}
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('readyToStart') || 'Ready to Start Your Journey?'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {t('ctaDescription') || 'Explore Our Comprehensive Guides and Tutorials to Enhance Your Skills.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="btn btn-secondary btn-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  {t('getInTouch') || 'Get in Touch'}
                  <ChevronRight size={20} />
                </Link>
                <Link 
                  href="/projects" 
                  className="btn btn-outline btn-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-primary"
                >
                  {t('viewProjects') || 'View Projects'}
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}