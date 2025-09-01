'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function CreateBlog() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: {
      en: '',
      bn: ''
    },
    excerpt: {
      en: '',
      bn: ''
    },
    content: {
      en: '',
      bn: ''
    },
    category: '',
    tags: '',
    featuredImage: '',
    published: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.en || !formData.title.bn || !formData.excerpt.en || !formData.excerpt.bn || !formData.content.en || !formData.content.bn || !formData.category) {
      alert(t('fillAllFields') || 'Please fill all required fields');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        router.push('/admin/blogs');
      } else {
        alert(data.error || 'Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string, lang?: 'en' | 'bn') => {
    if (lang) {
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field as keyof typeof prev] as { en: string; bn: string },
          [lang]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!session) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {t('create_new_blog') || 'Create New Blog'}
          </h1>
          <Link 
            href="/admin/blogs"
            className="btn btn-outline"
          >
            {t('backToBlogs') || 'Back to Blogs'}
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          {/* Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('titleEnglish') || 'Title (English)'} *
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full text-black dark:text-white"
                value={formData.title.en}
                onChange={(e) => handleInputChange('title', e.target.value, 'en')}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('titleBengali') || 'Title (Bengali)'} *
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full text-black dark:text-white"
                value={formData.title.bn}
                onChange={(e) => handleInputChange('title', e.target.value, 'bn')}
                required
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('excerptEnglish') || 'Excerpt (English)'} *
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-24 text-black dark:text-white"
                value={formData.excerpt.en}
                onChange={(e) => handleInputChange('excerpt', e.target.value, 'en')}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('excerptBengali') || 'Excerpt (Bengali)'} *
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-24 text-black dark:text-white"
                value={formData.excerpt.bn}
                onChange={(e) => handleInputChange('excerpt', e.target.value, 'bn')}
                required
              />
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('contentEnglish') || 'Content (English)'} *
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-64 text-black dark:text-white"
                value={formData.content.en}
                onChange={(e) => handleInputChange('content', e.target.value, 'en')}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('contentBengali') || 'Content (Bengali)'} *
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-64 text-black dark:text-white"
                value={formData.content.bn}
                onChange={(e) => handleInputChange('content', e.target.value, 'bn')}
                required
              />
            </div>
          </div>

          {/* Category and Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('category') || 'Category'} *
                </span>
              </label>
              <select
                className="select select-bordered w-full text-black dark:text-white"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                required
              >
                <option value="">{t('selectCategory') || 'Select Category'}</option>
                <option value="technology">{t('technology') || 'Technology'}</option>
                <option value="business">{t('business') || 'Business'}</option>
                <option value="lifestyle">{t('lifestyle') || 'Lifestyle'}</option>
                <option value="education">{t('education') || 'Education'}</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  {t('tags') || 'Tags'} ({t('commaSeparated') || 'comma separated'})
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full text-black dark:text-white"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                placeholder="react, javascript, web development"
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                {t('featuredImageUrl') || 'Featured Image URL'}
              </span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full text-black dark:text-white"
              value={formData.featuredImage}
              onChange={(e) => handleInputChange('featuredImage', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Published */}
          <div className="mb-6">
            <label className="label cursor-pointer justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox"
                checked={formData.published}
                onChange={(e) => handleInputChange('published', e.target.checked.toString())}
              />
              <span className="label-text text-black dark:text-white">
                {t('publishImmediately') || 'Publish immediately'}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                t('create_blog') || 'Create Blog'
              )}
            </button>
            <Link
              href="/admin/blogs"
              className="btn btn-outline"
            >
              {t('cancel') || 'Cancel'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}