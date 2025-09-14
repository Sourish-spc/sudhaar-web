"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";

const Profile = () => {
  const [image, setImage] = useState(null);

  // Handle file upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview image
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>

      <div className="max-w-xl bg-white shadow-md rounded-2xl p-6">
        {/* Profile Image Upload */}
        <div className="flex flex-col items-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 font-medium">Upload</span>
              )}
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            SOUL
          </h2>
          <p className="text-gray-500">Municipality Office</p>
        </div>

        {/* Basic Details */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Municipality:</span>
            <span className="text-gray-800">Bidhannagar Municipality</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">City:</span>
            <span className="text-gray-800">SALTLAKE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">District:</span>
            <span className="text-gray-800">KOLKATA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">State:</span>
            <span className="text-gray-800">WEST BENGAL</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

