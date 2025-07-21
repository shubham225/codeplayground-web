"use client";

import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col size-full">
      <SessionProvider>
        {/* Navbar */}
        <Navbar />
      {/* Page Contents */}
      <div className="size-full">
        <Toaster richColors position="top-right" />
        {children}
      </div>
      </SessionProvider>
    </main>
  );
}
