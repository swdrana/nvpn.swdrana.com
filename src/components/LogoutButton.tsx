'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      <LogOut className="h-5 w-5 mr-2" />
      Logout
    </button>
  )
}