"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ServiceDialog from "@/components/services/ServiceDialog";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
interface Service {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: Array<"Web Development" | "Mobile Development" | "Cloud Services" | "DevOps" | "Consulting" | "Support" | "Other" | "UI/UX Design" | "API Development" | "Database Design" | "System Architecture" | "Security Services" | "Testing & QA" | "AI/ML Development" | "Blockchain Development" | "IoT Solutions" | "E-commerce Development" | "CMS Development" | "Technical Writing" | "Code Review" | "Performance Optimization" | "Legacy System Migration" | "Email Server Setup" | "Domain Management" | "Web Hosting" | "SSL Certificates" | "DNS Management" | "Server Administration" | "Backup Solutions" | "Load Balancing" | "CDN Setup" | "Database Administration">;
  features: Array<{
    name: string;
    description: string;
    included: boolean;
  }>;
  pricing: {
    basePrice: number;
    currency: Array<'INR' | 'USD' | 'EUR' | 'GBP'>;
    billingCycle: Array<'one-time' | 'hourly' | 'monthly' | 'quarterly' | 'yearly'>;
    customQuote: boolean;
  };
  deliverables: string[];
  timeline: {
    estimatedDuration: number;
    durationUnit: 'days' | 'weeks' | 'months';
  };
  technologies: string[];
  images: Array<{
    url: string;
    alt?: string;
    isPrimary: boolean;
  }>;
  status: 'active' | 'inactive' | 'archived';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  customization: {
    isCustomizable: boolean;
    options: Array<{
      name?: string;
      values?: string[];
      priceModifier?: number;
    }>;
  };
  support: {
    includedHours?: number;
    responseTime?: string;
    channels?: Array<'email' | 'phone' | 'chat' | 'ticket'>;
  };
}

export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleOpenDialog = () => {
    setSelectedService(null);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedService(null);
    fetchServices(); // Refresh services after dialog closes
  };

  const handleEdit = (service: Service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(`/api/services/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          fetchServices();
        }
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services</h1>
        <Button onClick={handleOpenDialog} className="flex items-center gap-2">
          <PlusCircle className="h-5 w-5" />
          Add Service
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">No services found</h3>
            <p className="text-sm text-gray-500">Get started by adding your first service</p>
          </div>
        ) : (
          services.map((service) => (
            <Card key={service._id} className="hover:shadow-lg transition-shadow">
              <Link href={`/services/${service._id}`}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>${service.pricing.basePrice} {service.pricing.currency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(service);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(service._id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))
        )}
      </div>

      <ServiceDialog
        open={open}
        onOpenChange={setOpen}
        service={selectedService as Service | null}
        onClose={handleCloseDialog}
      />
    </div>
  );
}
