import React from "react";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/components/app-logo";
import Navigation from "@/components/navigation";
import ToggleMode from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col size-full">
      {/* Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl",
          "backdrop-saturate-150 supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-zinc-900/40 transition-all"
        )}
      >
        <div className="flex flex-row justify-between py-4 px-6 bg-transparent">
          {/* App Logo */}
          <Logo />

          {/* Mode Toggle and Profile */}
          <div className="gap-2 hidden lg:inline-flex items-center">
            <ToggleMode />
          </div>
        </div>
        <Separator />
      </nav>
      <main className="flex w-full h-full justify-between">
        {/* Main Section */}
        <section className="flex items-center justify-center size-full max-sm:px-4 pt-5">
          <div className="w-full max-w-[500px] flex-col justify-center gap-4 py-5 md:gap-5">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
