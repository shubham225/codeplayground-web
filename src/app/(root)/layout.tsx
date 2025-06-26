"use client";

import Navigation from "@/components/navigation";
import ProblemNavbar from "@/components/problem/problem-navbar";
import ProfileMenu from "@/components/profile-menu";
import ToggleMode from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useActionState } from "react";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isUserLoggedIn = false;

  return (
    <main className="flex flex-col size-full">
      <div className="flex flex-row justify-between p-2 dark:bg-[#1e1e1e] bg-gray-100/60">
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <ChevronsLeftRightEllipsis className="text-orange-400 font-bold w-8 h-8" />
            <h1 className="text-xl font-bold">OnlineCoding</h1>
          </div>
        </Link>
        {path.includes("problems/") ? <ProblemNavbar /> : <Navigation />}
        <div className="gap-1 hidden md:inline-flex">
          <ToggleMode />
          {isUserLoggedIn ? (
            <ProfileMenu />
          ) : (
            <Link href={"/login"}>
              <Button className="ml-6 relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Log In
                </span>
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="size-full">{children}</div>
    </main>
  );
}
