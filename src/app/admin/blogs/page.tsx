'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface Blog {
  _id: string;
  title: {
    en: string;
    bn: string;
  };
  slug: string;
  excerpt: {
    en: string;
    bn: string;
  };
  category: string;
  published: boolean;
  views: number;
  likes: number;
  readTime: number;
  publishedAt: string;
  createdAt: string;
  author: {
    name: string;
    email: string;
  };
}

export default function BlogManagement() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { language, t } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [publishedFilter, setPublishedFilter] = useState('all');

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/auth/signin');
      return;
    }
    fetchBlogs();
  }, [session, status, page, searchTerm, categoryFilter, publishedFilter]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        published: publishedFilter === 'all' ? 'all' : publishedFilter
      });
      
      if (searchTerm) params.append('search', searchTerm);
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      
      const response = await fetch(`/api/blogs?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.blogs);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm(t('confirmDelete') || 'Are you sure you want to delete this blog?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        fetchBlogs();
      } else {
        alert(t('deleteError') || 'Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert(t('deleteError') || 'Failed to delete blog');
    }
  };

  const togglePublished = async (slug: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ published: !currentStatus })
      });
      
      if (response.ok) {
        fetchBlogs();
      } else {
        alert(t('updateError') || 'Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      alert(t('updateError') || 'Failed to update blog');
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {t('blogManagement') || 'Blog Management'}
          </h1>
          <Link 
            href="/admin/blogs/create"
            className="btn btn-primary"
          >
            {t('create_new_blog') || 'Create New Blog'}
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder={t('searchBlogs') || 'Search blogs...'}
              className="input input-bordered w-full text-black dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select
              className="select select-bordered w-full text-black dark:text-white"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">{t('allCategories') || 'All Categories'}</option>
              <option value="technology">{t('technology') || 'Technology'}</option>
              <option value="business">{t('business') || 'Business'}</option>
              <option value="lifestyle">{t('lifestyle') || 'Lifestyle'}</option>
              <option value="education">{t('education') || 'Education'}</option>
            </select>
            
            <select
              className="select select-bordered w-full text-black dark:text-white"
              value={publishedFilter}
              onChange={(e) => setPublishedFilter(e.target.value)}
            >
              <option value="all">{t('allStatus') || 'All Status'}</option>
              <option value="true">{t('published') || 'Published'}</option>
              <option value="false">{t('draft') || 'Draft'}</option>
            </select>
            
            <button
              onClick={fetchBlogs}
              className="btn btn-outline"
            >
              {t('refresh') || 'Refresh'}
            </button>
          </div>
        </div>

        {/* Blog List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="text-black dark:text-white">{t('title') || 'Title'}</th>
                  <th className="text-black dark:text-white">{t('category') || 'Category'}</th>
                  <th className="text-black dark:text-white">{t('status') || 'Status'}</th>
                  <th className="text-black dark:text-white">{t('views') || 'Views'}</th>
                  <th className="text-black dark:text-white">{t('likes') || 'Likes'}</th>
                  <th className="text-black dark:text-white">{t('publishedAt') || 'Published'}</th>
                  <th className="text-black dark:text-white">{t('actions') || 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="text-black dark:text-white">
                      <div>
                        <div className="font-semibold">
                          {blog.title[language as 'en' | 'bn']}
                        </div>
                        <div className="text-sm opacity-70">
                          {blog.excerpt[language as 'en' | 'bn'].substring(0, 100)}...
                        </div>
                      </div>
                    </td>
                    <td className="text-black dark:text-white">
                      <span className="badge badge-outline">
                        {blog.category}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        blog.published ? 'badge-success' : 'badge-warning'
                      }`}>
                        {blog.published ? (t('published') || 'Published') : (t('draft') || 'Draft')}
                      </span>
                    </td>
                    <td className="text-black dark:text-white">{blog.views}</td>
                    <td className="text-black dark:text-white">{blog.likes}</td>
                    <td className="text-black dark:text-white">
                      {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : '-'}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/blogs/edit/${blog.slug}`}
                          className="btn btn-sm btn-outline"
                        >
                          {t('edit') || 'Edit'}
                        </Link>
                        <button
                          onClick={() => togglePublished(blog.slug, blog.published)}
                          className={`btn btn-sm ${
                            blog.published ? 'btn-warning' : 'btn-success'
                          }`}
                        >
                          {blog.published ? (t('unpublish') || 'Unpublish') : (t('publish') || 'Publish')}
                        </button>
                        <button
                          onClick={() => handleDelete(blog.slug)}
                          className="btn btn-sm btn-error"
                        >
                          {t('delete') || 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
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
                  className={`join-item btn ${
                    page === pageNum ? 'btn-active' : ''
                  }`}
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
      </div>
    </div>
  );
}