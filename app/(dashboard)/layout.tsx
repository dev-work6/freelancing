"use client";
import React from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
  analytics,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 ml-0 lg:ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Content */}
          <div className="md:col-span-2">{children}</div>

          {/* Side Panels */}
          <div className="bg-white rounded-lg shadow p-4">{analytics}</div>
        </div>
      </div>
    </div>
  );
}
