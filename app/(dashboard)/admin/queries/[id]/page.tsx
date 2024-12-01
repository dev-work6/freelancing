"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { NotFound } from "@/components/ui/notFound";
import { Loader } from "@/components/ui/Loader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface Reply {
  message: string;
  createdAt: string;
  _id: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
  replies: Reply[];
}

const ContactDetailsPage = () => {
  const params = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [blocking, setBlocking] = useState(false);
  const [error, setError] = useState(false);
  const [showBlockDialog, setShowBlockDialog] = useState(false);
  const [blockReason, setBlockReason] = useState("");

  const fetchContact = async () => {
    try {
      // Fetch contact details
      const response = await fetch(`/api/contact/${params.id}`);
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();

      if (!data) {
        setError(true);
        return;
      }

      setContact(data);

      // Update status to read
      if (data.status !== "read") {
        await fetch("/api/contact", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: params.id, status: "read" }),
        });
      }
    } catch (error) {
      console.error("Error fetching contact:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, [params.id]);

  const handleSendReply = async () => {
    if (!reply.trim()) return;

    setSending(true);
    try {
      const response = await fetch("/api/contact/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactId: contact?._id,
          reply: reply,
          email: contact?.email,
        }),
      });

      if (response.ok) {
        // Update status to replied
        await fetch("/api/contact", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: contact?._id, status: "replied" }),
        });
        fetchContact();
        setReply("");
        // Update local contact state
        setContact((prev) => (prev ? { ...prev, status: "replied" } : null));
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      // Optionally show error message
    } finally {
      setSending(false);
    }
  };
  const handleBlock = async () => {
    if (!contact?.email || !blockReason.trim()) return;

    setBlocking(true);
    try {
      const response = await fetch("/api/contact/block", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: contact.email,
          reason: blockReason,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error || "Failed to block email");
        return;
      }
      toast.success("Email blocked successfully");
      setShowBlockDialog(false);
      setBlockReason("");
    } catch (error) {
      console.error("Error blocking email:", error);
      toast.error("Failed to block email");
    } finally {
      setBlocking(false);
    }
  };

  if (loading) {
    return <Loader text="Loading Contact Details..." />;
  }

  if (error || !contact) {
    return (
      <NotFound
        title="Contact not found"
        message="The requested contact could not be found."
      />
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-screen mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Contact Details</h1>
          <Button
            onClick={() => setShowBlockDialog(true)}
            disabled={blocking}
            variant="destructive"
          >
            {blocking ? "Blocking..." : "Block User"}
          </Button>
        </div>

        <Dialog open={showBlockDialog} onOpenChange={setShowBlockDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Block User</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <label className="font-medium text-gray-600 block mb-2">
                Reason for Blocking
              </label>
              <Textarea
                value={blockReason}
                onChange={(e) => setBlockReason(e.target.value)}
                placeholder="Enter reason for blocking..."
                className="min-h-[100px]"
              />
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowBlockDialog(false)}
                disabled={blocking}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleBlock}
                disabled={blocking || !blockReason.trim()}
              >
                {blocking ? "Blocking..." : "Block User"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-gray-600">Name</label>
              <p className="mt-1">{contact.name}</p>
            </div>
            <div>
              <label className="font-medium text-gray-600">Email</label>
              <p className="mt-1">
                <a href={`mailto:${contact.email}`} className="text-blue-500">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <label className="font-medium text-gray-600">Status</label>
            <p className="mt-1">
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  contact.status === "replied"
                    ? "bg-blue-100 text-blue-800"
                    : contact.status === "read"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {contact.status}
              </span>
            </p>
          </div>

          <div>
            <label className="font-medium text-gray-600">Date</label>
            <p className="mt-1">
              {new Date(contact.createdAt).toLocaleString()}
            </p>
          </div>

          <div>
            <label className="font-medium text-gray-600">Message</label>
            <p className="mt-1 whitespace-pre-wrap">{contact.message}</p>
          </div>

          {contact.replies && contact.replies.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Reply History</h2>
              <div className="space-y-4">
                {contact.replies.map((reply) => (
                  <div
                    key={reply._id}
                    className="bg-gray-50 p-4 rounded-lg border"
                  >
                    <p className="whitespace-pre-wrap">{reply.message}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Sent on: {new Date(reply.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <label className="font-medium text-gray-600 block mb-2">
              New Reply
            </label>
            <Textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply here..."
              className="min-h-[150px]"
            />
          </div>

          <Button
            onClick={handleSendReply}
            disabled={sending || !reply.trim()}
            className="w-full mt-4"
          >
            {sending ? "Sending..." : "Send Reply"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
