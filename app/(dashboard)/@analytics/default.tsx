"use client";

import { useEffect, useState } from "react";

interface PaymentInfo {
  totalRevenue: number;
  activeProjects: number;
}

export default function AdminAnalytics() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    totalRevenue: 0,
    activeProjects: 0
  });

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        const response = await fetch('/api/payments/info');
        if (response.ok) {
          const data = await response.json();
          setPaymentInfo(data);
        }
      } catch (error) {
        console.error('Error fetching payment info:', error);
      }
    };

    fetchPaymentInfo();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <p className="text-2xl font-semibold">₹{paymentInfo.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <p className="text-2xl font-semibold">{paymentInfo.activeProjects}</p>
        </div>
      </div>
    </div>
  );
}