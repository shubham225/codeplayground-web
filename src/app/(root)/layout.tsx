"use client";

import Logo from "@/components/app-logo";
import LoginButton from "@/components/login-button";
import Navigation from "@/components/navigation";
import ProblemNavbar from "@/components/problem/problem-navbar";
import ProfileMenu from "@/components/profile-menu";
import ToggleMode from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";
import { isUserLoggedIn } from "@/lib/server-actions/auth";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const [isPending, startTransition] = useTransition();
  const [sessionActive, setSessionActive] = useState(false);

  useEffect(() => {
    CheckUserLogin();
  }, []);

  const CheckUserLogin = async () => {
    startTransition(async () => {
      const loggedIn = await isUserLoggedIn();
      setSessionActive(loggedIn);

      console.log("User Logged in : ", loggedIn);
    });
  };

  return (
    <main className="flex flex-col size-full">
      {/* Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl",
          "backdrop-saturate-150 supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-zinc-900/40 transition-all"
        )}
      >
        <div className="flex flex-row justify-between py-3 px-6 bg-transparent">
          {/* App Logo */}
          <Logo />

          {/* Navbar Menu */}
          {path.includes("problems/") ? (
            <ProblemNavbar />
          ) : (
            <Navigation path={path} />
          )}

          {/* Mode Toggle and Profile */}
          <div className="gap-2 hidden lg:inline-flex items-center">
            <ToggleMode />
            {sessionActive ? <ProfileMenu /> : <LoginButton />}
          </div>
        </div>
        <Separator />
      </nav>
      {/* Page Contents */}
      <div className="size-full">
        <Toaster richColors />
        {children}
      </div>
    </main>
  );
}
