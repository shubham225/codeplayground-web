import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full justify-between font-inter">
        <section className="flex items-center justify-center size-full max-sm:px-4 pt-5">
          <div className="w-full max-w-[500px] flex-col justify-center gap-4 py-5 md:gap-5">
            {children}
          </div>
        </section>

      {/* Image and Background from leftside */}
      <div className="h-full w-full p-10 max-lg:hidden">
        <div className="size-full bg-sky-1 rounded-3xl">
          <div className="relative h-full w-full items-center">
            <Image
              src="/imgs/landing-page.jpg"
              alt="Auth Image"
              fill
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
