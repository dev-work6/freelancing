"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentSuccess() {
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!sessionId) return;

      try {
        setLoading(true);

        // Fetch payment status first
        const statusResponse = await fetch(
          `/api/payments/?session_id=${sessionId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!statusResponse.ok) {
          throw new Error("Failed to fetch payment status");
        }

        // Fetch full payment details
        const paymentResponse = await fetch(`/api/payments/${sessionId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!paymentResponse.ok) {
          throw new Error("Failed to fetch payment details");
        }

        const paymentData = await paymentResponse.json();
        setPaymentDetails(paymentData);
      } catch (error) {
        console.error("Error fetching payment details:", error);
        // Could add error state management here if needed
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-6xl w-full p-8">
        <div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Left Column */}
          <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Payment Successful!
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Thank you for your payment. Your transaction has been completed
                successfully.
              </p>
              {paymentDetails && (
                <div className="text-left mb-10 bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-xl text-gray-800 mb-4 border-b pb-2">Payment Details:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium text-gray-900">₹{paymentDetails.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Payment ID:</span>
                      <span className="font-mono text-sm text-gray-900">{paymentDetails._id}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status:</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          paymentDetails.paymentStatus === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {paymentDetails.paymentStatus}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Service ID:</span>
                      <span className="font-mono text-sm text-gray-900">{paymentDetails.serviceId}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customer Email:</span>
                      <span className="text-gray-900">{paymentDetails.customerName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Shipping Address:</span>
                      <span className="text-gray-900 text-right max-w-[60%]">{paymentDetails.customerAddress}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-8 text-left">
              <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
              <p className="text-blue-800 mb-2">
                You will receive a confirmation email shortly with your order
                details.
              </p>
              <p className="text-blue-800 mb-2">
                For any queries or assistance, you can:
              </p>
              <ul className="list-disc list-inside text-blue-800">
                <li>
                  WhatsApp us at:{" "}
                  <a href="https://wa.me/917889557560" className="hover:underline">+91 7889557560</a>
                </li>
                <li>
                  Email us at:{" "}
                  <a href="mailto:daimdev6@gmail.com" className="hover:underline">daimdev6@gmail.com</a>
                </li>
                <li>
                  Call Us: <a href="tel:+917889557560" className="hover:underline">+91 7889557560</a>
                </li>
              </ul>
              <p className="text-blue-800 mt-2">
                Business hours: Mon-Fri,{" "}
                <span className="font-bold text-sm">9 AM - 6 PM IST</span>
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/"
                className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
