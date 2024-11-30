import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "DevDaim - Professional Development Services",
  description:
    "Professional web and software development services. Get high-quality, custom solutions for your business needs.",
  keywords: [
    "web development",
    "website design",
    "custom website development",
    "responsive web design",
    "mobile app development",
    "software development",
    "full stack development",
    "frontend development",
    "backend development",
    "ecommerce website",
    "web application",
    "custom software solutions",
    "enterprise software",
    "SaaS development",
    "API development",
    "cloud solutions",
    "database development",
    "UI/UX design",
    "WordPress development",
    "React development",
    "Node.js development",
    "JavaScript development",
    "TypeScript development",
    "PHP development",
    "Python development",
    "mobile responsive",
    "cross-platform development",
    "progressive web apps",
    "web hosting",
    "website maintenance",
    "SEO optimization",
    "performance optimization",
    "security solutions",
    "payment integration",
    "third party integration",
    "custom CMS",
    "web portal development",
    "business automation",
    "digital transformation",
    "IT consulting",
  ],
  authors: [{ name: "DevDaim" }],
  creator: "DevDaim",
  publisher: "DevDaim",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DevDaim - Professional Development Services",
    description:
      "Professional web and software development services for your business needs",
    type: "website",
    siteName: "DevDaim",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDaim - Professional Development Services",
    description:
      "Professional web and software development services for your business needs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <Toaster position="top-right" duration={2500} />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
