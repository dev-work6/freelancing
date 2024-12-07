"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMiniPopup, setShowMiniPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const beep = new Audio("/sounds/pop.mp3");
      beep.play().catch((error) => {
        console.error("Failed to play sound:", error);
      });
      setShowMiniPopup(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);
    
  const handleClose = () => {
    setShowPopup(false);
    // Show mini popup after 10 seconds of closing main popup
    setTimeout(() => {
      setShowMiniPopup(true);
      // Play beep sound when mini popup shows
      const beep = new Audio("/sounds/pop.mp3");
      beep.play().catch((error) => {
        console.error("Failed to play sound:", error);
      });
    }, 10000);
  };

  const handleMiniPopupClose = () => {
    setShowMiniPopup(false);
    // Show mini popup again after 10 seconds
    setTimeout(() => {
      setShowMiniPopup(true);
      // Play beep sound when mini popup shows
      const beep = new Audio("/sounds/pop.mp3");
      beep.play().catch((error) => {
        console.error("Failed to play sound:", error);
      });
    }, 5000);
  };


  const handlePopupOpen = () => {
    setShowPopup(true);
    setShowMiniPopup(false);
  };


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Software Development & Consulting
        </h1>
        <div className="w-24 h-0.5 bg-gray-900"></div>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            I&apos;m Daim Zahoor Kakroo, a software consultant specializing in
            enterprise-grade web applications and digital transformation
            solutions. With a focus on scalable architecture and modern
            development practices, I help businesses streamline their operations
            through thoughtfully crafted software solutions.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-serif text-gray-800 mb-6">
              Professional Services
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                Enterprise Web Applications
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                Cloud Architecture & Development
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                E-commerce Implementation
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                AI Integration Services
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                Technical Consultation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif text-gray-800 mb-6">
              Technical Expertise
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                React.js & Next.js Development
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                Node.js Backend Architecture
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                Database Design & Implementation
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                API Development & Integration
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                Cloud Infrastructure Management
              </li>
            </ul>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-50 p-12 rounded-lg max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Let&apos;s Discuss Your Project</h2>
              <p className="text-gray-700 mb-8">
                I&apos;m available for consulting and development projects. Let&apos;s explore how we can elevate your business through strategic technical solutions.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3">
                  Schedule a Consultation
                </Button>
                <Button 
                  onClick={handleClose}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-8 py-3"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMiniPopup && (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50 max-w-xs animate-fade-in">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700 mr-4">Ready to discuss your project?</p>
            <div className="flex gap-2">
              <Button 
                className="bg-gray-900 text-white text-xs hover:bg-gray-800 px-3 py-1"
                onClick={() => handlePopupOpen()}
              >
                Start
              </Button>
              <Button 
                className="bg-gray-200 text-gray-800 text-xs hover:bg-gray-300 px-2 py-1"
                onClick={handleMiniPopupClose}
              >
                ✕
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
