"use client";

import BannerFooter from "@/components/banner-footer";
import Link from "next/link";
import HomeBgDark from "@/public/home-bg-dark.jpg";
import HomeBgLight from "@/public/home-bg-light.jpg";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beam-with-collision";

export default function Home() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center p-0.5">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundBeamsWithCollision className="md:h-full bg-transparent">
        <div className="h-full flex flex-col py-6 justify-between">
          <div className="h-full flex flex-col justify-around">
            <div className="flex flex-col justify-center items-center gap-6">
              <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                Practice. Excell. Succeed.
              </h2>
              <h3 className="text-lg font-semibold">
                <Highlight className="text-black dark:text-white p-2">
                  Enhance your coding skills
                </Highlight>
                ..take mock exams...and more
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center py-4">
              <Link href="/problems">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Start Coding...
                  </div>
                </button>
              </Link>
            </div>
            <div></div>
          </div>
          <BannerFooter />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
