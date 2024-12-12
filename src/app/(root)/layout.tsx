import Navigation from "@/components/navigation";
import ProfileMenu from "@/components/profile-menu";
import ToggleMode from "@/components/toggle-mode";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col size-full">
      <div className="flex flex-row justify-between p-2 dark:bg-[#1e1e1e] bg-gray-100/60">
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <ChevronsLeftRightEllipsis className="text-orange-400 font-bold w-8 h-8" />
            <h1 className="text-xl font-bold">AppName</h1>
          </div>
        </Link>
        <Navigation />
        <div className="gap-1 hidden md:inline-flex">
          <ToggleMode />
          <ProfileMenu />
        </div>
      </div>
      <div className="size-full">
        {children}
      </div>
    </main>
  );
}
