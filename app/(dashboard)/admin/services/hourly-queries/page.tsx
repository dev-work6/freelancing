"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getToken } from "@/lib/auth/token";
import { Loader } from "@/components/ui/Loader";

interface Reply {
  _id: string;
  message: string;
  offerAmount?: number;
  isFromAdmin: boolean;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}

interface HourlyService {
  _id: string;
  name: string;
  email?: string;
  description: string;
  hourlyRate: number;
  currency: string;
  minimumHours: number;
  availability: string[];
  skills: string[];
  userId: {
    _id?: string;
    name?: string;
    email?: string;
  };
  user?: {
    _id?: string;
    name?: string;
    email?: string;
  };
  replies: Reply[];
  status: string;
  createdAt: string;
}

export default function HourlyQueries() {
  const [services, setServices] = useState<HourlyService[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [offerAmount, setOfferAmount] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services/hourly");
      const data = await response.json();
      setServices(data);
      console.log(data);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch services";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (serviceId: string) => {
    try {
      const token = getToken();
      const response = await fetch("/api/services/hourly/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          serviceId,
          message: replyText[serviceId],
          offerAmount: offerAmount[serviceId]
            ? parseFloat(offerAmount[serviceId])
            : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reply");
      }

      const updatedService = await response.json();
      setServices(
        services.map((service) =>
          service._id === serviceId ? updatedService : service
        )
      );

      // Clear input fields
      setReplyText((prev) => ({ ...prev, [serviceId]: "" }));
      setOfferAmount((prev) => ({ ...prev, [serviceId]: "" }));

      toast({
        title: "Success",
        description: "Reply sent successfully",
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send reply";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Error sending reply:", error);
    }
  };

  if (loading) {
    return <Loader text="Loading hourly queries..." />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Hourly Service Requests</h1>
      <div className="grid gap-6">
        {services.map((service) => (
          <Card key={service._id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{service.name}</span>
                <Badge>{service.status}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">
                    From: {service?.user?.name || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-500">
                    Email: {service?.user?.email || service.email}
                  </p>
                  <p className="mt-2">{service.description}</p>
                  <div className="mt-2">
                    <p>
                      Rate: {service.hourlyRate} {service.currency}/hour
                    </p>
                    <p>Minimum Hours: {service.minimumHours}</p>
                    <p>Skills: {service.skills.join(", ")}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Replies</h3>
                  <div className="space-y-3">
                    {service.replies.map((reply, index) => (
                      <div
                        key={reply._id || index}
                        className={`p-3 rounded-lg ${
                          reply.isFromAdmin ? "bg-blue-50" : "bg-gray-50"
                        }`}
                      >
                        <p className="text-sm font-semibold">
                          {reply.isFromAdmin ? "Admin" : reply.userId.name}
                        </p>
                        <p className="mt-1">{reply.message}</p>
                        {reply.offerAmount && (
                          <p className="mt-1 font-semibold">
                            Offer: {reply.offerAmount} {service.currency}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(reply.createdAt).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <Textarea
                    placeholder="Type your reply..."
                    value={replyText[service._id] || ""}
                    onChange={(e) =>
                      setReplyText((prev) => ({
                        ...prev,
                        [service._id]: e.target.value,
                      }))
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Offer amount (optional)"
                    value={offerAmount[service._id] || ""}
                    onChange={(e) =>
                      setOfferAmount((prev) => ({
                        ...prev,
                        [service._id]: e.target.value,
                      }))
                    }
                  />
                  <Button
                    onClick={() => handleReply(service._id)}
                    disabled={!replyText[service._id]}
                  >
                    Send Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
