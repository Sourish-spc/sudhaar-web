"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    fetch("https://sudhaar-backend-web.onrender.com/issues")
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  const filteredReports =
    activeTab === "All"
      ? reports
      : reports.filter(
          (report) => report.status.toLowerCase() === activeTab.toLowerCase()
        );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "unassigned":
        return "bg-blue-100 text-blue-700";
      case "in_progress":
        return "bg-yellow-100 text-yellow-700";
      case "resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // dd/mm/yyyy
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Reports Received
      </h1>
      <p className="text-gray-600 mb-6">
        Track the status of received civic issues
      </p>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {reports.filter((r) => r.status.toLowerCase() === "unassigned")
              .length}
          </div>
          <div className="text-gray-500">Unassigned</div>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {reports.filter((r) => r.status.toLowerCase() === "in_progress")
              .length}
          </div>
          <div className="text-gray-500">In Progress</div>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {reports.filter((r) => r.status.toLowerCase() === "resolved")
              .length}
          </div>
          <div className="text-gray-500">Resolved</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4 border-b">
        {["All", "Unassigned", "In_progress", "Resolved"].map((tab) => ( //filter
          <button
            key={tab}
            className={`py-2 px-4 -mb-px font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} (
            {tab === "All"
              ? reports.length
              : reports.filter(
                  (r) => r.status.toLowerCase() === tab.toLowerCase()
                ).length}
            )
          </button>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report) => {
          // Use placeholder if no images
          const imageUrl =
          report.images && report.images.length > 0
            ? report.images[0] // full URL from backend
            : "https://via.placeholder.com/150";


          return (
            <div
              key={report.id}
              className="bg-white shadow rounded p-4 flex flex-col md:flex-row md:items-center"
            >
              {/* Report Image */}
              <img
                src={imageUrl}
                alt={report.title}
                className="w-full md:w-32 h-20 object-cover rounded mb-4 md:mb-0 md:mr-4"
              />

              {/* Report Details */}
              <div className="flex-1">
                <h2 className="text-gray-600 font-semibold">{report.title}</h2>
                <div className="text-blue-500 text-sm mb-2">
                  {"Loaction"}📍 Lat: {report.location[0]}, Lng: {report.location[1]} • {"Zip: "}
                  {report.zip} • {"Category"}: {report.type}
                </div>
                <div
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                    report.status
                  )}`}
                >
                  {report.status}
                </div>
              </div>

              {/* Report Dates */}
              <div className="text-gray-400 text-sm mt-2 md:mt-0 md:ml-4 text-right">
                <div>Reported {formatDate(report.created)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Reports;
