import React from "react";
import Link from "next/link";
import { Home, FileText, Bell, User, HelpCircle } from "lucide-react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
            <span className="text-xl font-semibold text-gray-900">CivicReport</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6 px-3 space-y-1">
          <Link href="/dashboard">
            <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg cursor-pointer">
              <Home className="w-5 h-5 mr-3" />
              Home
            </div>
          </Link>

          <Link href="/reports">
            <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
              <FileText className="w-5 h-5 mr-3" />
              Reports Received
            </div>
          </Link>

          <Link href="/notifications">
            <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Bell className="w-5 h-5 mr-3" />
              Notifications
            </div>
          </Link>

          <Link href="/profile">
            <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
              <User className="w-5 h-5 mr-3" />
              Profile
            </div>
          </Link>
        </nav>

        {/* Help button at bottom */}
        <div className="absolute bottom-6 left-3 right-3">
          <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
            <HelpCircle className="w-5 h-5 mr-3" />
            Help
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default Layout;
