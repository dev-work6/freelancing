"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

const QueriesPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState<PaginationData>();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchContacts = async (page: number = 1) => {
    try {
      const response = await fetch(`/api/contact?page=${page}&limit=10`);
      const data = await response.json();
      setContacts(data.contacts);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        // Refresh contacts after deletion
        fetchContacts(currentPage);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: 'read' }),
      });

      if (response.ok) {
        // Refresh contacts after update
        fetchContacts(currentPage);
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchContacts(page);
  };

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Contact Queries</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id} className="cursor-pointer hover:bg-gray-50">
                <Link href={`/admin/queries/${contact._id}`} className="contents">
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{contact.message}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      contact.status === 'replied' ? 'bg-blue-100 text-blue-800' :
                      contact.status === 'read' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {contact.status}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                </Link>
                <TableCell className="space-x-2">
                  {contact.status === 'unread' ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMarkAsRead(contact._id)}
                    >
                      Mark as Read
                    </Button>
                  ) : contact.status === 'replied' ? (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                    >
                      Replied
                    </Button>
                  ) : (
                    <Link href={`/admin/queries/${contact._id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                      >
                        Reply
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {pagination && (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center gap-2 py-4 bg-white border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {[...Array(pagination.totalPages)].map((_, index) => (
            <Button
              key={index + 1}
              variant={currentPage === index + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagination.totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default QueriesPage;