"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  COriginal,
  JavaOriginal,
  CplusplusOriginal,
  JavascriptOriginal,
  PythonOriginal,
  GoOriginal,
  LinkedinOriginal,
} from "devicons-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-full flex flex-col p-2 justify-between">
      <div className="px-4 py-10 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl h-10 border-x border-dashed"></div>
          <div className="mx-auto max-w-7xl border-y border-dashed flex justify-center ">
            <h1 className="border-x border-dashed max-w-6xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl p-6 dark:text-slate-300">
              {"Start Coding. Stay Consistent. Grow Fast."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </h1>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl border-y border-dashed flex justify-center ">
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
              className="relative z-10 mx-auto border-x border-dashed p-60 max-w-6xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
            >
              Practice coding problems, take timed tests, and build real skills.{" "}
              <span className="font-bold">Code</span>
              <span className="text-orange-400 font-bold">Playground</span> is
              your all-in-one platform for becoming a confident developer.
            </motion.p>
          </div>
          <div className="mx-auto max-w-6xl h-10 border-x border-dashed"></div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/problems">
              <Button className="w-60 transform px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ">
                Start Coding
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="w-60 transform px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn more
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1.3,
            }}
          >
            {/* Left side language logos  */}
            <Card className="absolute hidden xl:inline-flex -top-6 p-3 items-center">
              <JavaOriginal size={30} strokeWidth={2} />
            </Card>

            <Card className="absolute hidden xl:inline-flex top-52 -left-20 p-3 items-center">
              <JavascriptOriginal size={30} strokeWidth={2} />
            </Card>

            <Card className="absolute hidden xl:inline-flex -bottom-6 p-3 items-center">
              <CplusplusOriginal size={30} strokeWidth={2} />
            </Card>
            {/* Right side language logos  */}

            <Card className="absolute hidden xl:inline-flex -top-6 right-0 p-3 items-center">
              <COriginal size={30} strokeWidth={2} />
            </Card>

            <Card className="absolute hidden xl:inline-flex top-52 -right-20 p-3 items-center">
              <PythonOriginal size={30} strokeWidth={2} />
            </Card>

            <Card className="absolute hidden xl:inline-flex -bottom-6 right-0 p-3 items-center">
              <GoOriginal size={30} strokeWidth={2} />
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
