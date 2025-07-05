"use client";

import React, { useState } from "react";
import PageHeader from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Code2, CopyCheck, Database, MonitorSmartphone } from "lucide-react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-2">
          <Card className="w-full max-w-sm">
            <CardHeader className="p-0">
              <div className="relative w-full h-28 overflow-hidden">
                <Image
                  src="/imgs/coding.jpg"
                  alt="Profile Picture"
                  width={400}
                  height={50}
                  className="rounded-t-md overflow-clip"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 pt-3">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-3xl">Coding</h1>
                <h5 className="text-muted-foreground text-sm">
                  Submit coding problems with input/output to test algorithm
                  skills.
                </h5>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-0">
              <Link
                className="w-full h-full"
                href="/contribute-question/coding"
              >
                <Button
                  variant="ghost"
                  className="rounded-t-none w-full text-muted-foreground"
                >
                  <Code2 />{" "}
                  <span className="hidden sm:inline">
                    Create Coding Question
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* MCQ */}
          <Card className="w-full max-w-sm">
            <CardHeader className="p-0">
              <div className="relative w-full h-28 overflow-hidden">
                <Image
                  src="/imgs/multiple-choice.jpg"
                  alt="Profile Picture"
                  width={400}
                  height={50}
                  className="rounded-t-md overflow-clip"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 pt-3">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-3xl">Multiple Choice</h1>
                <h5 className="text-muted-foreground text-sm">
                  Add multiple-choice questions with answers to assess concept
                  clarity.
                </h5>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-0">
              <Link
                className="w-full h-full"
                href="/contribute-question/coding"
              >
                <Button
                  variant="ghost"
                  className="rounded-t-none w-full text-muted-foreground"
                >
                  <CopyCheck />{" "}
                  <span className="hidden sm:inline">Create MCQ Question</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Database */}
          <Card className="w-full max-w-sm">
            <CardHeader className="p-0">
              <div className="relative w-full h-28 overflow-hidden">
                <Image
                  src="/imgs/database.png"
                  alt="Profile Picture"
                  width={400}
                  height={50}
                  className="rounded-t-md overflow-clip"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 pt-3">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-3xl">Database</h1>
                <h5 className="text-muted-foreground text-sm">
                  Contribute SQL or schema-based questions to practice database
                  skills.
                </h5>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-0">
              <Link
                className="w-full h-full"
                href="/contribute-question/coding"
              >
                <Button
                  variant="ghost"
                  className="rounded-t-none w-full text-muted-foreground"
                >
                  <Database />{" "}
                  <span className="hidden sm:inline">
                    Create Database Question
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Frontend */}
          <Card className="w-full max-w-sm">
            <CardHeader className="p-0">
              <div className="relative w-full h-28 overflow-hidden">
                <Image
                  src="/imgs/frontend.jpg"
                  alt="Profile Picture"
                  width={400}
                  height={50}
                  className="rounded-t-md overflow-clip"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 pt-3">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-3xl">Frontend</h1>
                <h5 className="text-muted-foreground text-sm">
                  Share HTML/CSS/JS tasks to improve frontend development.
                </h5>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-0">
              <Link
                className="w-full h-full"
                href="/contribute-question/coding"
              >
                <Button
                  variant="ghost"
                  className="rounded-t-none w-full text-muted-foreground"
                >
                  <MonitorSmartphone />{" "}
                  <span className="hidden sm:inline">
                    Create Frontend Question
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
