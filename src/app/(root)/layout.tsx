"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();

  return (
    <main className="flex flex-col size-full">
      <SessionProvider>
        {/* Navbar */}
        <Navbar />
        {/* Page Contents */}
        <div className="size-full">
          {children}
          <ToastContainer theme={theme.theme} position="bottom-left"/>
        </div>
      </SessionProvider>
    </main>
  );
}
