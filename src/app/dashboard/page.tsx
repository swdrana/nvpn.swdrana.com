"use client";

import { LogOut, Mail, User, PlusCircle, FileText, Settings, BarChart3, Edit3 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Welcome, {session.user?.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>{session.user?.email}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/admin/blogs/create" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group-hover:scale-105 transform transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create New Blog</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Write and publish a new blog post</p>
                </div>
                <PlusCircle className="h-8 w-8 text-primary group-hover:text-primary-focus" />
              </div>
            </div>
          </Link>

          <Link href="/admin/blogs" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group-hover:scale-105 transform transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Manage Blogs</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">View and edit existing blog posts</p>
                </div>
                <FileText className="h-8 w-8 text-secondary group-hover:text-secondary-focus" />
              </div>
            </div>
          </Link>

          <Link href="/blogs" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group-hover:scale-105 transform transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">View Blog Site</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">See how your blogs appear to visitors</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent group-hover:text-accent-focus" />
              </div>
            </div>
          </Link>

          <Link href="/profile" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group-hover:scale-105 transform transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Profile Settings</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Manage your account settings</p>
                </div>
                <Settings className="h-8 w-8 text-info group-hover:text-info-focus" />
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Edit3 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Blog Management System</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">You can now create and manage blog posts from your dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <PlusCircle className="h-5 w-5 text-success" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Dashboard Updated</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">New features and improved user interface available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
