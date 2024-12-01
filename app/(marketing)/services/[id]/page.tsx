"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Service {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string[];
  features: Array<{
    name: string;
    description: string;
    included: boolean;
  }>;
  pricing: {
    basePrice: number;
    currency: string[];
    billingCycle: string[];
    customQuote: boolean;
  };
  deliverables: string[];
  timeline: {
    estimatedDuration: number;
    durationUnit: "days" | "weeks" | "months";
  };
  technologies: string[];
  images: Array<{
    url: string;
    alt?: string;
    isPrimary: boolean;
  }>;
  status: string;
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
    channels?: string[];
  };
}

export default function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [negotiateModalOpen, setNegotiateModalOpen] = useState(false);
  const [negotiateForm, setNegotiateForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    currency: "",
    message: "",
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch service");
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [params.id]);

  const handleNegotiateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/services/negotiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId: service?._id,
          ...negotiateForm,
        }),
      });

      if (response.ok) {
        alert("Your negotiation request has been sent successfully!");
        setNegotiateModalOpen(false);
        setNegotiateForm({
          name: "",
          email: "",
          phone: "",
          budget: "",
          currency: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send negotiation request");
      }
    } catch (error) {
      alert("Failed to send negotiation request. Please try again later.");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="mt-6 text-xl text-muted-foreground">
          Loading service details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
        <div className="text-2xl font-semibold text-destructive">
          ⚠️ {error}
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Please try again later
        </p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-2xl font-semibold">Service not found</div>
        <p className="mt-4 text-lg text-muted-foreground">
          The requested service does not exist
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto py-16 px-2 space-y-12 max-w-screen">
        {/* Header Section */}
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-12 relative">
          <Badge
            variant={service.status === "active" ? "default" : "secondary"}
            className="absolute top-4 right-4 text-sm px-3 py-1 uppercase tracking-wider"
          >
            {service.status}
          </Badge>
          <CardHeader className="pb-6">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-5xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {service.title}
              </CardTitle>
              <div className="flex gap-2">
                {service.category.map((cat, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-1.5 text-sm font-medium"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <div className="prose prose-xl max-w-none prose-primary prose-headings:text-primary">
              {service.description}
            </div>
          </CardContent>
        </Card>

        {/* Features Section - Horizontal Grid */}
        <Card className="border-0 shadow-xl mb-12">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Key Features & Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6">Feature</th>
                    <th className="text-left py-4 px-6">Description</th>
                    <th className="text-center py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {service.features.map((feature, index) => (
                    <tr
                      key={index}
                      className={`border-b transition-colors hover:bg-muted/50`}
                    >
                      <td className="py-4 px-6 font-medium">{feature.name}</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        {feature.description}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {feature.included ? (
                          <span className="text-primary text-xl">✓</span>
                        ) : (
                          <span className="text-muted-foreground text-xl">
                            ○
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        {/* Info Cards Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Pricing Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl">Pricing Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-primary">
                    {service.pricing.basePrice}
                  </span>
                  <div className="flex gap-2">
                    {service.pricing.currency.map((curr, index) => (
                      <span
                        key={index}
                        className="text-xl text-muted-foreground"
                      >
                        {curr}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.pricing.billingCycle.map((cycle, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                    </Badge>
                  ))}
                </div>
                {!service.pricing.customQuote && (
                  <Button
                    variant="secondary" 
                    className="self-start px-4 py-2 text-base"
                    onClick={() => setNegotiateModalOpen(true)}
                  >
                    Negotiate
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Negotiate Modal */}
          <Dialog open={negotiateModalOpen} onOpenChange={setNegotiateModalOpen}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Negotiate Price</DialogTitle>
                <DialogDescription>
                  Fill out the form below to start a negotiation for {service.title}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleNegotiateSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={negotiateForm.name}
                    onChange={(e) => setNegotiateForm({...negotiateForm, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={negotiateForm.email}
                    onChange={(e) => setNegotiateForm({...negotiateForm, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={negotiateForm.phone}
                    onChange={(e) => setNegotiateForm({...negotiateForm, phone: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Your Budget</Label>
                    <Input
                      id="budget"
                      type="number"
                      value={negotiateForm.budget}
                      onChange={(e) => setNegotiateForm({...negotiateForm, budget: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <select
                      id="currency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={negotiateForm.currency}
                      onChange={(e) => setNegotiateForm({...negotiateForm, currency: e.target.value})}
                      required
                    >
                      <option value="">Select Currency</option>
                      {["INR", "USD", "EUR"].map((curr, index) => (
                        <option key={index} value={curr}>
                          {curr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={negotiateForm.message}
                    onChange={(e) => setNegotiateForm({...negotiateForm, message: e.target.value})}
                    placeholder="Tell us about your requirements and why you'd like to negotiate the price..."
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Submit Request</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* Timeline Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-medium">
                {service.timeline.estimatedDuration}{" "}
                {service.timeline.durationUnit}
              </p>
            </CardContent>
          </Card>

          {/* Technologies Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Support Card */}
          {service.support && (
            <Card className="border-0 shadow-xl md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-3xl">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.support.includedHours && (
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-2xl">⏱</span>
                      <p className="text-xl">
                        {service.support.includedHours} hours included
                      </p>
                    </div>
                  )}
                  {service.support.responseTime && (
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-2xl">⚡</span>
                      <p className="text-xl">
                        Response time: {service.support.responseTime}
                      </p>
                    </div>
                  )}
                  {service.support.channels &&
                    service.support.channels.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {service.support.channels.map((channel, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="px-4 py-2"
                          >
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Image Gallery - Horizontal Scroll */}
        {service.images && service.images.length > 0 && (
          <Card className="border-0 shadow-xl mt-12">
            <CardHeader>
              <CardTitle className="text-3xl">Project Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-8 overflow-x-auto pb-4 snap-x">
                {service.images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-none w-96 aspect-video relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt || service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {image.isPrimary && (
                      <Badge className="absolute top-4 right-4 bg-primary/90 text-white px-4 py-2">
                        Primary
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
