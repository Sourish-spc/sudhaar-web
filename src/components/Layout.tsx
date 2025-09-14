"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, FileText, Bell, User, HelpCircle, LogOut } from "lucide-react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // clear session
    router.push("/"); // back to login page
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 relative">
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Sudhaar</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6 px-3 space-y-2">
          <Link href="/dashboard">
            <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-blue-500 active:scale-95 rounded-lg transition">
              <Home className="w-5 h-5 mr-3" />
              Home
            </button>
          </Link>

          <Link href="/reports">
            <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-blue-500 active:scale-95 rounded-lg transition">
              <FileText className="w-5 h-5 mr-3" />
              Reports Received
            </button>
          </Link>

          <Link href="/notifications">
            <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-blue-500 active:scale-95 rounded-lg transition">
              <Bell className="w-5 h-5 mr-3" />
              Notifications
            </button>
          </Link>

          <Link href="/profile">
            <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-blue-500 active:scale-95 rounded-lg transition">
              <User className="w-5 h-5 mr-3" />
              Profile
            </button>
          </Link>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-3 right-3 space-y-2">
          {/* Help */}
          <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-blue-500 active:scale-95 rounded-lg transition">
            <HelpCircle className="w-5 h-5 mr-3" />
            Help
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-3 py-2 text-sm font-medium text-red-600 hover:text-white hover:bg-red-500 active:scale-95 rounded-lg transition"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default Layout;
