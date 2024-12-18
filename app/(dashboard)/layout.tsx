"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"; // Import Sidebar, SidebarLink, and SidebarBody
import {
  BarChart3,
  BlocksIcon,
  BriefcaseBusiness,
  HomeIcon,
  Settings2,
  UserCircleIcon,
} from "lucide-react";
import React, { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define your sidebar links
  const sidebarLinks = [
    {
      href: "/admin/dashboard",
      icon: <HomeIcon />,
      label: "Dashboard",
    },
    {
      href: "/admin/services",
      icon: <BriefcaseBusiness />,
      label: "Services",
      subLinks: [
        {
          href: "/admin/negotiations",
          label: "Negotiations",
        },
        {
          href: "/admin/services/hourly-queries",
          label: "Hourly Services",
        },
      ],
    },
    {
      href: "/admin/clients",
      icon: <UserCircleIcon />,
      label: "Clients",
    },

    {
      href: "/admin/queries",
      icon: <BarChart3 />,
      label: "Queries",
    },
    {
      href: "/admin/payments",
      icon: <Settings2 />,
      label: "Payments",
    },
    {
      href: "/admin/blocklist",
      icon: <BlocksIcon />,
      label: "Blocklist",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} animate={true}>
        <SidebarBody>
          <div className="flex flex-col">
            {sidebarLinks.map((link) => (
              <SidebarLink key={link.href} link={link} />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Add margin-left for mobile view */}
      <div className="flex-1 p-8 md:ml-0 ml-[1.8rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
