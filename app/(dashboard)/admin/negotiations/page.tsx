"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader } from "@/components/ui/Loader";
import { toast } from "sonner";
import NegotiationDialog from "../../../../components/services/NegotiationDialog";

interface Negotiation {
  _id: string;
  service: {
    _id: string;
    title: string;
    pricing: {
      basePrice: number;
      currency: string[];
    };
  };
  name: string;
  email: string;
  phone?: string;
  budget: number;
  message: string;
  currency: "INR" | "USD" | "EUR";
  status: "pending" | "negotiating" | "accepted" | "rejected" | "completed";
  replies: Array<{
    _id: string;
    message: string;
    offerAmount?: number;
    isFromAdmin: boolean;
    createdAt: string;
  }>;
  createdAt: string;
  finalAmount?: number;
}

export default function NegotiationsPage() {
  const [negotiations, setNegotiations] = useState<Negotiation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNegotiation, setSelectedNegotiation] =
    useState<Negotiation | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchNegotiations = async () => {
    try {
      const response = await fetch("/api/services/negotiate");
      if (!response.ok) throw new Error("Failed to fetch negotiations");
      const data = await response.json();
      setNegotiations(data);
    } catch (error) {
      console.error("Error fetching negotiations:", error);
      toast.error("Failed to load negotiations. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNegotiations();
  }, []);

  const getStatusColor = (status: Negotiation["status"]) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      negotiating: "bg-blue-100 text-blue-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      completed: "bg-purple-100 text-purple-800",
    };
    return colors[status];
  };

  const formatCurrency = (amount: number, currency: string[] = ["USD"]) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency[0],
    }).format(amount);
  };

  const handleViewDetails = (negotiation: Negotiation) => {
    setSelectedNegotiation(negotiation);
    setDialogOpen(true);
  };

  if (loading) {
    return <Loader text="Loading Negotiations..." />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Service Negotiations</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {negotiations.map((negotiation) => (
              <TableRow key={negotiation._id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{negotiation.service.title}</p>
                    <p className="text-sm text-gray-500">
                      Base Price:{" "}
                      {formatCurrency(
                        negotiation.service.pricing.basePrice,
                        negotiation.service.pricing.currency
                      )}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{negotiation.name}</p>
                    <p className="text-sm text-gray-500">{negotiation.email}</p>
                    {negotiation.phone && (
                      <p className="text-sm text-gray-500">
                        {negotiation.phone}
                      </p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {formatCurrency(negotiation.budget, [negotiation.currency])}
                  {negotiation.finalAmount && (
                    <p className="text-sm text-green-600">
                      Final:{" "}
                      {formatCurrency(
                        negotiation.finalAmount,
                        [negotiation.currency]
                      )}
                    </p>
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      negotiation.status
                    )} capitalize`}
                  >
                    {negotiation.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(negotiation.createdAt).toLocaleDateString()}
                  <p className="text-sm text-gray-500">
                    {negotiation.replies.length} messages
                  </p>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(negotiation)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {negotiations.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No negotiations found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <NegotiationDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        negotiation={selectedNegotiation}
        onUpdate={fetchNegotiations}
      />
    </div>
  );
}
