import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import { User, Mail } from 'lucide-react';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{session.user?.name}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{session.user?.email}</span>
              </div>
            </div>
            <div className="mt-6">
              <LogoutButton />
            </div>
          </div>
        </div>
        
        <ChangePasswordForm />
      </div>
    </div>
  );
}