"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";

const Reports = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample data matching the reference image
  const reports = [
    {
      id: 1,
      title: "Broken streetlight on Park Avenue",
      location: "Park Ave & 12th St",
      category: "Streetlight",
      status: "In Progress",
      progress: 65,
      reportedDate: "1/1/2025",
      estimatedCompletion: "5/1/2025"
    },
    {
      id: 2,
      title: "Large pothole causing traffic issues",
      location: "Main St & 5th Ave",
      category: "Pothole",
      status: "Unassigned",
      progress: 25,
      reportedDate: "30/12/2024",
      estimatedCompletion: null
    },
    {
      id: 3,
      title: "Overflowing garbage bins",
      location: "Broadway & 8th St",
      category: "Garbage",
      status: "Resolved",
      progress: 100,
      reportedDate: "15/12/2024",
      estimatedCompletion: null
    }
  ];

  const getStatusCounts = () => {
    const unassigned = reports.filter(r => r.status === 'Unassigned').length;
    const inProgress = reports.filter(r => r.status === 'In Progress').length;
    const resolved = reports.filter(r => r.status === 'Resolved').length;
    return { unassigned, inProgress, resolved, total: reports.length };
  };

  const getFilteredReports = () => {
    if (activeTab === 'all') return reports;
    if (activeTab === 'unassigned') return reports.filter(r => r.status === 'Unassigned');
    if (activeTab === 'inProgress') return reports.filter(r => r.status === 'In Progress');
    if (activeTab === 'resolved') return reports.filter(r => r.status === 'Resolved');
    return reports;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Unassigned': return 'text-blue-600 bg-blue-50';
      case 'In Progress': return 'text-yellow-600 bg-yellow-50';
      case 'Resolved': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Streetlight': return '💡';
      case 'Pothole': return '🕳️';
      case 'Garbage': return '🗑️';
      default: return '📍';
    }
  };

  const counts = getStatusCounts();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports Received</h1>
            <p className="text-gray-600 mt-1">Track the status of received civic issues</p>
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-sm text-gray-600">{counts.total} reports</span>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{counts.unassigned}</div>
              <div className="text-gray-600">Unassigned</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{counts.inProgress}</div>
              <div className="text-gray-600">In Progress</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{counts.resolved}</div>
              <div className="text-gray-600">Resolved</div>
            </div>
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
              onClick={() => setActiveTab('unassigned')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'unassigned' 
                  ? 'border-blue-500 text-blue-600 bg-blue-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Unassigned ({counts.unassigned})
            </button>
            <button
              onClick={() => setActiveTab('inProgress')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'inProgress' 
                  ? 'border-yellow-500 text-yellow-600 bg-yellow-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              In Progress ({counts.inProgress})
            </button>
            <button
              onClick={() => setActiveTab('resolved')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'resolved' 
                  ? 'border-green-500 text-green-600 bg-green-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Resolved ({counts.resolved})
            </button>
          </div>

          {/* Reports List */}
          <div className="divide-y divide-gray-200">
            {getFilteredReports().map((report) => (
              <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Icon placeholder */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                      {getCategoryIcon(report.category)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {report.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          📍 {report.location}
                        </span>
                        <span className="flex items-center">
                          {getCategoryIcon(report.category)} {report.category}
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{report.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              report.status === 'Resolved' ? 'bg-green-500' :
                              report.status === 'In Progress' ? 'bg-yellow-500' : 'bg-gray-400'
                            }`}
                            style={{ width: `${report.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>📅 Reported {report.reportedDate}</span>
                        {report.estimatedCompletion && (
                          <span>Est. completion {report.estimatedCompletion}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu button */}
                  <button className="text-gray-400 hover:text-gray-600 p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;