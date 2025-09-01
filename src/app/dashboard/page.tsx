"use client";

import { LogOut, Mail, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <User className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700">
                Welcome, {session.user?.name}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700">{session.user?.email}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
