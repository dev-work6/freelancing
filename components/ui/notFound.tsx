"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NotFoundProps {
  title?: string;
  message?: string;
  className?: string;
}

export function NotFound({
  title = "Not Found",
  message = "The requested resource could not be found.",
  className
}: NotFoundProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center min-h-[200px] p-4",
      className
    )}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-center">
        {message} 
      </p>
    </div>
  );
}
