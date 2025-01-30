"use client";

import Navigation from "@/components/navigation";
import ProblemNavbar from "@/components/problem/problem-navbar";
import ProfileMenu from "@/components/profile-menu";
import ToggleMode from "@/components/toggle-theme";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  console.log(path);

  return (
    <main className="flex flex-col size-full">
      <div className="flex flex-row justify-between p-2 dark:bg-[#1e1e1e] bg-gray-100/60">
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <ChevronsLeftRightEllipsis className="text-orange-400 font-bold w-8 h-8" />
            <h1 className="text-xl font-bold">AppName</h1>
          </div>
        </Link>
        {path.includes("problems/") ? <ProblemNavbar /> : <Navigation />}
        <div className="gap-1 hidden md:inline-flex">
          <ToggleMode />
          <ProfileMenu />
        </div>
      </div>
      <div className="size-full">{children}</div>
    </main>
  );
}
