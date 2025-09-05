"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample notifications based on the reports from the previous page
  const notifications = [
    {
      id: 1,
      type: "Report Status Updated",
      icon: "🕒",
      status: "Status Update",
      title: "Your streetlight issue report is now being worked on by the maintenance team.",
      reportTitle: "Broken streetlight on Park Avenue",
      reportIcon: "💡",
      date: "2/1/2025",
      category: "updates",
      isRead: false
    },
    {
      id: 2,
      type: "Report Received",
      icon: "✅",
      status: "Acknowledged",
      title: "Thank you for reporting the pothole issue. We have received your report and assigned it to our road maintenance department.",
      reportTitle: "Large pothole causing traffic issues",
      reportIcon: "🕳️",
      date: "30/12/2024",
      category: "unread",
      isRead: false
    },
    {
      id: 3,
      type: "Issue Resolved",
      icon: "✅",
      status: "Completed",
      title: "Great news! The garbage overflow issue you reported has been resolved. The bins have been emptied and additional collection scheduled.",
      reportTitle: "Overflowing garbage bins",
      reportIcon: "🗑️",
      date: "28/12/2024",
      category: "completed",
      isRead: true
    }
  ];

  const getNotificationCounts = () => {
    const unread = notifications.filter(n => !n.isRead).length;
    const updates = notifications.filter(n => n.category === 'updates').length;
    const completed = notifications.filter(n => n.category === 'completed').length;
    return { unread, updates, completed, total: notifications.length };
  };

  const getFilteredNotifications = () => {
    if (activeTab === 'all') return notifications;
    if (activeTab === 'unread') return notifications.filter(n => !n.isRead);
    if (activeTab === 'updates') return notifications.filter(n => n.category === 'updates');
    if (activeTab === 'completed') return notifications.filter(n => n.category === 'completed');
    return notifications;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Status Update': return 'text-yellow-700 bg-yellow-100 border-yellow-200';
      case 'Acknowledged': return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'Completed': return 'text-green-700 bg-green-100 border-green-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  const markAllRead = () => {
    // This would typically update the backend
    console.log("Mark all notifications as read");
  };

  const counts = getNotificationCounts();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              {counts.unread > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {counts.unread} new
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-1">Stay updated on your report progress</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={markAllRead}
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              Mark all read
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'all' 
                  ? 'border-blue-500 text-blue-600 bg-blue-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              All ({counts.total})
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'unread' 
                  ? 'border-blue-500 text-blue-600 bg-blue-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Unread ({counts.unread})
            </button>
            <button
              onClick={() => setActiveTab('updates')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'updates' 
                  ? 'border-yellow-500 text-yellow-600 bg-yellow-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Updates ({counts.updates})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'completed' 
                  ? 'border-green-500 text-green-600 bg-green-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Completed ({counts.completed})
            </button>
          </div>

          {/* Notifications List */}
          <div className="divide-y divide-gray-200">
            {getFilteredNotifications().map((notification) => (
              <div key={notification.id} className={`p-6 hover:bg-gray-50 transition-colors ${!notification.isRead ? 'bg-blue-50/30' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{notification.icon}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {notification.type}
                        </h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>

                      {/* Status Badge */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(notification.status)}`}>
                          {notification.status}
                        </span>
                      </div>

                      {/* Message */}
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {notification.title}
                      </p>

                      {/* Report Reference */}
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                        <span className="text-base">{notification.reportIcon}</span>
                        <span>{notification.reportTitle}</span>
                      </div>

                      {/* Date */}
                      <div className="text-xs text-gray-500">
                        {notification.date}
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu button */}
                  <button className="text-gray-400 hover:text-gray-600 p-2 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {getFilteredNotifications().length === 0 && (
            <div className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5 5-5H9.5a4.5 4.5 0 110-9H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No notifications</h3>
              <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;