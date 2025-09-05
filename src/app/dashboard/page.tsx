'use client';

import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "../contexts/AuthContext";
import Layout from "@/components/Layout";
import { MapPin } from "lucide-react";

const Dashboard = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  // Show loading state while checking authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Authenticating...</h1>
          <p className="text-gray-600">Please wait while we verify your access.</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      {/* Dashboard header with user info and logout */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track civic issues in your community</p>
          <p className="text-sm text-blue-600 mt-1">Welcome back, User {user?.userId}</p>
        </div>
        <button
          onClick={() => {
            logout();
            router.push('/');
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          <span>Logout</span>
        </button>
      </div>

      {/* Interactive Map Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 text-gray-700 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Interactive Map</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-80 relative overflow-hidden">
          {/* Map placeholder with dots */}
          <div className="w-full h-full bg-gray-100 rounded-lg relative flex items-center justify-center">
            <div className="absolute top-12 left-24 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-32 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                <span className="font-medium text-gray-900">Interactive Map View</span>
              </div>
              <p className="text-sm text-gray-600">8 issues shown on map</p>
              <p className="text-xs text-green-600 mt-1">✓ Authenticated Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status cards */}
      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">New Issues</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
          <p className="text-sm text-gray-600">Issues awaiting review</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">In Progress</h3>
          <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
          <p className="text-sm text-gray-600">Issues being worked on</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Resolved</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">3</div>
          <p className="text-sm text-gray-600">Issues completed</p>
        </div>
      </div>

      {/* Additional authenticated content */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-center mb-3">
          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-lg font-semibold text-blue-900">Authenticated Session</h3>
        </div>
        <p className="text-blue-800 text-sm">
          You are securely logged in as User <strong>{user?.userId}</strong>. 
          This dashboard and all its features are now accessible to you.
        </p>
      </div>
    </Layout>
  );
};

export default Dashboard;