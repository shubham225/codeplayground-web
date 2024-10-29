import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Coding Test",
  description: "Online coding test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col size-full">
            <div className="flex flex-row justify-between p-2 dark:bg-[#1e1e1e] bg-gray-50">
              <Link href={"/"}>
                <div className="flex gap-2 items-center">
                  <ChevronsLeftRightEllipsis className="text-orange-400 font-bold w-8 h-8" />
                  <h1 className="text-xl font-bold">AppName</h1>
                </div>
              </Link>
              <ModeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
