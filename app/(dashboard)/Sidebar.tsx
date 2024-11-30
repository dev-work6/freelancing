"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, UserCircleIcon, BarChart3, Settings, Menu, X } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
  { name: "Services", href: "/admin/services", icon: UserCircleIcon },
  { name: "Clients", href: "/admin/clients", icon: UserCircleIcon },
  { name: "Queries", href: "/admin/queries", icon: BarChart3 },
  { name: "Payments", href: "/admin/payments", icon: Settings },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`
        lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white transform 
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
      `}
      >
        <nav className="mt-16 px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-4 py-3 my-1 text-sm font-medium rounded-md
                  ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                `}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="w-64 bg-white border-r border-gray-200">
          <div className="flex flex-col h-screen">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="flex-1 px-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        flex items-center px-4 py-3 text-sm font-medium rounded-md
                        ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                      `}
                    >
                      <item.icon className="mr-3 h-6 w-6" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
