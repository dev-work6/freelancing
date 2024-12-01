"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  currency: "INR" | "USD" | "EUR";
}

interface NegotiationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  negotiation: Negotiation | null;
  onUpdate: () => void;
}

export default function NegotiationDialog({
  open,
  onOpenChange,
  negotiation,
  onUpdate,
}: NegotiationDialogProps) {
  const [reply, setReply] = useState("");
  const [offerAmount, setOfferAmount] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [finalAmount, setFinalAmount] = useState<string>("");
  const [sending, setSending] = useState(false);

  const handleSendReply = async () => {
    if (!reply.trim()) return;

    setSending(true);
    try {
      const response = await fetch("/api/services/negotiate/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          negotiationId: negotiation?._id,
          message: reply,
          offerAmount: offerAmount ? parseFloat(offerAmount) : undefined,
          isFromAdmin: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reply");
      }

      setReply("");
      setOfferAmount("");
      onUpdate();
      toast.success("Reply sent successfully");
    } catch (error) {
      console.error("Error sending reply:", error);
      toast.error("Failed to send reply");
    } finally {
      setSending(false);
    }
  };

  const handleUpdateStatus = async () => {
    if (!status) return;

    try {
      const response = await fetch("/api/services/negotiate/finalize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          negotiationId: negotiation?._id,
          status,
          finalAmount: finalAmount ? parseFloat(finalAmount) : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setStatus("");
      setFinalAmount("");
      onUpdate();
      toast.success("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const formatCurrency = (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  if (!negotiation) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Negotiation Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Service and Client Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Service Details</h3>
              <p className="text-lg">{negotiation.service.title}</p>
              <p className="text-gray-600">
                Base Price:{" "}
                {formatCurrency(
                  negotiation.service.pricing.basePrice,
                  negotiation.service.pricing.currency[0]
                )}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Client Details</h3>
              <p className="text-lg">{negotiation.name}</p>
              <p className="text-gray-600">{negotiation.email}</p>
              {negotiation.phone && (
                <p className="text-gray-600">{negotiation.phone}</p>
              )}
            </div>
          </div>

          {/* Initial Message */}
          <div>
            <h3 className="font-semibold mb-2">Initial Request</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">{negotiation.message}</p>
              <p className="mt-2 font-medium">
                Proposed Budget: {formatCurrency(negotiation.budget, negotiation.currency)}
              </p>
            </div>
          </div>

          {/* Conversation History */}
          <div>
            <h3 className="font-semibold mb-2">Conversation History</h3>
            <div className="space-y-4">
              {negotiation.replies.map((reply) => (
                <div
                  key={reply._id}
                  className={`p-4 rounded-lg ${
                    reply.isFromAdmin
                      ? "bg-blue-50 ml-8"
                      : "bg-gray-50 mr-8"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">
                      {reply.isFromAdmin ? "Admin" : negotiation.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(reply.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-600">{reply.message}</p>
                  {reply.offerAmount && (
                    <p className="mt-2 font-medium">
                      Offered Amount: {formatCurrency(reply.offerAmount, negotiation.currency)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Reply Form */}
          {negotiation.status !== "completed" && (
            <div className="space-y-4">
              <h3 className="font-semibold">Send Reply</h3>
              <Textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your reply..."
                className="min-h-[100px]"
              />
              <div className="flex gap-4">
                <Input
                  type="number"
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                  placeholder="Offer amount (optional)"
                />
                <Button
                  onClick={handleSendReply}
                  disabled={sending || !reply.trim()}
                >
                  {sending ? "Sending..." : "Send Reply"}
                </Button>
              </div>
            </div>
          )}

          {/* Status Update */}
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-semibold">Update Status</h3>
            <div className="flex gap-4">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="accepted">Accept</SelectItem>
                  <SelectItem value="rejected">Reject</SelectItem>
                  <SelectItem value="completed">Complete</SelectItem>
                </SelectContent>
              </Select>
              {status === "accepted" && (
                <Input
                  type="number"
                  value={finalAmount}
                  onChange={(e) => setFinalAmount(e.target.value)}
                  placeholder="Final amount"
                />
              )}
              <Button onClick={handleUpdateStatus} disabled={!status}>
                Update Status
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}