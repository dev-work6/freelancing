"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message. Please try again.");
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Shown first on mobile */}
          <div className="lg:order-2">
            <Card className="p-8 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="mt-1"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="mt-1"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={9}
                    placeholder="Your message"
                    className="mt-1"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information - Shown second on mobile */}
          <div className="space-y-8 lg:order-1">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                      Email
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      <a href="mailto:devdaim@proton.me">devdaim@proton.me</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                      Phone
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      <a href="tel:+917889557560">+91 7889557560</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                      Location
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Srinagar, Jammu and Kashmir
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
