"use client";

import React from "react";
import Logo from "@/components/app-logo";
import LoginButton from "@/components/login-button";
import Navigation from "@/components/navigation";
import ProblemNavbar from "@/components/problem/problem-navbar";
import ProfileMenu from "@/components/profile-menu";
import ToggleMode from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
import { SidebarMenuSkeleton } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";

type Props = {};

export default function Navbar({}: Props) {
  const path = usePathname();
  const { data: session, status } = useSession();

  return (
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
          {status === "loading" ? (
            <div className="flex gap-1 items-center w-52 p-1 ">
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
          ) : status === "authenticated" ? (
            <ProfileMenu />
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
      <Separator />
    </nav>
  );
}
