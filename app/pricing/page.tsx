"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  Code,
  Cpu,
  Gem,
  Rocket,
  Star,
  Server,
  Layout,
  Bug,
  Mail,
} from "lucide-react";
import Link from "next/link";

const projectPlans = [
  {
    name: "Basic Project",
    description: "Simple web applications with core features",
    basePrice: "₹20000",
    duration: "starting price",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    features: [
      "Up to 4 Core Features",
      "Basic User Authentication",
      "Responsive Design",
      "Basic Database Integration",
      "Standard Security Features",
    ],
    additionalFeatures: [
      "+ ₹10000 for Advanced Auth",
      "+ ₹15000 for Payment Integration",
      "+ ₹8000 for Email Notifications",
      "+ ₹12000 for Admin Dashboard",
      "+ ₹5000 for Extra Core Feature (2 Max.)",
    ],
    buttonText: "Discuss Project",
    buttonVariant: "outline" as const,
  },
  {
    name: "Hourly Services",
    description: "Flexible development on hourly basis",
    price: "₹1000-₹2500 ",
    duration: "/hour",
    icon: <Rocket className="h-6 w-6 text-indigo-500" />,
    features: [
      "Dedicated Developer Time",
      "Regular Progress Updates",
      "Code Documentation",
      "Direct Communication",
      "Flexible Scheduling",
      "Source Code Access",
    ],
    rateRanges: [
      "Frontend: ₹1000-1500/hr",
      "Backend: ₹1500-2000/hr",
      "Full Stack: ₹2000-2500/hr",
    ],
    buttonText: "Book Hours",
    buttonVariant: "outline" as const,
    popular: true,
  },
  {
    name: "Advanced Project",
    description: "Feature-rich applications for businesses",
    basePrice: "₹55000",
    duration: "starting price",
    icon: <Star className="h-6 w-6 text-purple-500" />,
    features: [
      "Up to 8 Advanced Features",
      "Multi-role Authentication",
      "Complex Database Architecture",
      "API Integration Capabilities",
      "Advanced Security Measures",
      "Performance Optimization",
    ],
    additionalFeatures: [
      "+ ₹15000 for Real-time Features",
      "+ ₹22000 for Analytics Dashboard",
      "+ ₹25000 for Custom Integrations",
      "+ ₹5000 for Extra Core Feature (2 Max.)",
    ],
    buttonText: "Start Consultation",
    buttonVariant: "default" as const,
  },
];

const individualServices = [
  {
    name: "API Development",
    price: "₹15000",
    duration: "starting from",
    icon: <Server className="h-5 w-5" />,
    description: "RESTful/GraphQL API development with documentation",
  },
  {
    name: "UI Development",
    price: "₹20000",
    duration: "starting from",
    icon: <Layout className="h-5 w-5" />,
    description: "Responsive, modern UI with latest frameworks",
  },
  {
    name: "Bug Fixing",
    price: "₹1200",
    duration: "/hour",
    icon: <Bug className="h-5 w-5" />,
    description: "Debugging and resolving application issues",
  },
  {
    name: "Server Setup & Hosting",
    price: "₹8000",
    duration: "one-time",
    icon: <Cpu className="h-5 w-5" />,
    description: "Complete server configuration and deployment ",
  },
  {
    name: "Email Integration",
    price: "₹5000",
    duration: "one-time",
    icon: <Mail className="h-5 w-5" />,
    description: "Email service setup with templates",
  },
];
export default function PricingPage() {
  return (
    <div className="container mx-auto px-3 py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-1">
          Flexible Development Pricing
        </h1>
        <p className="text-base text-muted-foreground">
          Choose between project-based or hourly development
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3 max-w-5xl mx-auto">
        {projectPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-3 relative ${
              plan.popular ? "border border-primary -mt-4" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-center justify-center mb-2">
              {plan.icon}
            </div>

            <h3 className="text-lg font-bold text-center mb-1">{plan.name}</h3>
            <p className="text-xs text-muted-foreground text-center mb-2">
              {plan.description}
            </p>

            <div className="text-center mb-2">
              <div>
                <span className="text-2xl font-bold">
                  {plan.basePrice || plan.price}
                </span>
                <span className="text-xs text-muted-foreground"> {plan.duration}</span>
              </div>
            </div>

            <ul className="space-y-1.5 mb-3 text-xs">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-2.5 w-2.5 text-green-500 mr-1.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {plan.additionalFeatures && (
              <div className="mb-3">
                <h4 className="text-xs font-semibold mb-1.5">Additional Features:</h4>
                <ul className="space-y-0.5">
                  {plan.additionalFeatures.map((feature) => (
                    <li key={feature} className="text-[10px] text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {plan.rateRanges && (
              <div className="mb-3">
                <h4 className="text-xs font-semibold mb-1.5">Rate Ranges:</h4>
                <ul className="space-y-0.5">
                  {plan.rateRanges.map((rate) => (
                    <li key={rate} className="text-[10px] text-muted-foreground">
                      {rate}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button variant={plan.buttonVariant} className="w-full text-xs h-8" asChild>
              <Link href="/contact">{plan.buttonText}</Link>
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-center mb-4">
          Individual Services
        </h2>
        <div className="grid md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {individualServices.map((service) => (
            <Card key={service.name} className="p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                {service.icon}
                <h3 className="font-semibold text-sm">{service.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-1.5">
                {service.description}
              </p>
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold">{service.price}</span>
                <span className="text-[10px] text-muted-foreground">
                  {service.duration}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground mb-1.5">
          All projects include: Free consultation • Code documentation • 30-day support
        </p>
        <div className="flex items-center justify-center space-x-2">
          <Cpu className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">
            Modern tech stack
          </span>
          <Gem className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">
            Quality assured deliverables
          </span>
        </div>
      </div>
    </div>
  );
}
