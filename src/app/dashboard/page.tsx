import React from "react";
import Layout from "@/components/Layout"
import { MapPin } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      {/* Dashboard header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Track civic issues in your community</p>
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
            <div className="absolute top-12 left-24 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-32 right-32 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-16 right-16 w-3 h-3 bg-red-500 rounded-full"></div>

            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                <span className="font-medium text-gray-900">Interactive Map View</span>
              </div>
              <p className="text-sm text-gray-600">8 issues shown on map</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status cards */}
      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">New Issues</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
          <p className="text-sm text-gray-600">Issues awaiting review</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">In Progress</h3>
          <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
          <p className="text-sm text-gray-600">Issues being worked on</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Resolved</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">3</div>
          <p className="text-sm text-gray-600">Issues completed</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
