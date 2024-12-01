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
import { toast } from "sonner";
import { Loader } from "@/components/ui/Loader";

interface BlockedEmail {
  _id: string;
  email: string;
  reason: string;
  createdAt: string;
  active: boolean;
}

export default function BlocklistPage() {
  const [blocklist, setBlocklist] = useState<BlockedEmail[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlocklist = async () => {
    try {
      const response = await fetch("/api/contact/block", {
        cache: "no-store",
      });
      console.log(response);

      if (!response.ok) throw new Error("Failed to fetch blocklist");
      const data = await response.json();
      setBlocklist(data);
    } catch (error) {
      console.error("Error fetching blocklist:", error);
      toast.error("Failed to load blocklist");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleBlock = async (email: string, currentState: boolean) => {
    try {
      const response = await fetch("/api/contact/block", {
        method: currentState ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          currentState 
            ? { email }
            : { email, reason: "Re-blocked by admin" }
        ),
      });

      if (!response.ok) {
        throw new Error(currentState ? "Failed to unblock email" : "Failed to block email");
      }

      toast.success(currentState ? "Email unblocked successfully" : "Email blocked successfully");
      fetchBlocklist(); // Refresh the list
    } catch (error) {
      console.error("Error toggling block state:", error);
      toast.error(currentState ? "Failed to unblock email" : "Failed to block email");
    }
  };

  useEffect(() => {
    fetchBlocklist();
  }, []);

  if (loading) {
    return (
      <Loader text="Loading Blocklist..." />    
    );
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Email Blocklist Management</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Added On</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blocklist.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.reason}</TableCell>
                <TableCell>{getTimeAgo(item.createdAt)}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.active
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.active ? "Blocked" : "Inactive"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant={item.active ? "destructive" : "default"}
                    size="sm"
                    onClick={() => handleToggleBlock(item.email, item.active)}
                  >
                    {item.active ? "Unblock" : "Block"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {blocklist.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No blocked emails found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
