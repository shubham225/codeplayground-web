import React from "react";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <main className="flex w-full h-full justify-between">
        {/* Image and Background */}
        {/* <div className="h-full w-full max-lg:hidden z-10 p-0"> */}
          {/* <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xs"> */}
            {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p> */}
            {/* <GridPattern
              key="background-pattern"
              squares={[
                [4, 4],
                [5, 1],
                [8, 2],
                [5, 3],
                [5, 5],
                [10, 10],
                [12, 15],
                [15, 10],
                [10, 15],
                [15, 10],
                [10, 15],
                [15, 10],
              ]}
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-45%] h-[200%] skew-y-12"
              )}
            /> */}
          {/* </div> */}
        {/* </div> */}

        {/* Main Section */}
        <section className="flex items-center justify-center size-full max-sm:px-4 pt-5">
          <div className="w-full max-w-[500px] flex-col justify-center gap-4 py-5 md:gap-5">
            {children}
          </div>
        </section>
      </main>
      {/* <GridPattern
        key="side-image-pattern"
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      /> */}
    </div>
  );
}
