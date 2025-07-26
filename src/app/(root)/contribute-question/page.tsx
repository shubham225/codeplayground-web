import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Code2, CopyCheck, Database, MonitorSmartphone } from "lucide-react";

type Props = {};

const contributeMenu = [
  {
    title: "Coding",
    description:
      "Submit coding problems with input/output to test algorithm skills.",
    link: "/contribute-question/coding",
    imageSrc: "/imgs/coding.jpg",
    buttonDesc: "Create Coding Question",
    buttonIcon: Code2,
    disabled: false,
  },
  {
    title: "Multiple Choice",
    description:
      "Add multiple-choice questions with answers to assess concept clarity.",
    link: "/contribute-question/multiple-choice",
    imageSrc: "/imgs/multiple-choice.jpg",
    buttonDesc: "Create MCQ Question",
    buttonIcon: CopyCheck,
    disabled: false,
  },
  {
    title: "Database",
    description:
      "Contribute SQL or schema-based questions to practice database skills.",
    link: "/contribute-question/database",
    imageSrc: "/imgs/database.png",
    buttonDesc: "Create Database Question",
    buttonIcon: Database,
    disabled: true,
  },
  {
    title: "Frontend",
    description: "Share HTML/CSS/JS tasks to improve frontend development.",
    link: "/contribute-question/frontend",
    imageSrc: "/imgs/frontend.jpg",
    buttonDesc: "Create Frontend Question",
    buttonIcon: MonitorSmartphone,
    disabled: true,
  },
];

export default function page({}: Props) {
  return (
    <div className="mx-auto py-14">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-2">
          {contributeMenu.map((item) => {
            return (
              <Card key={item.link} className="w-full max-w-sm rounded-lg shadow-sm">
                <CardHeader className="p-0">
                  <div className="relative w-full h-28 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt="Profile Picture"
                      width={400}
                      height={50}
                      className="rounded-t-lg overflow-clip"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 pt-3">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl">{item.title}</h1>
                    <h5 className="text-muted-foreground text-sm">
                      {item.description}
                    </h5>
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="p-0">
                  <Link className="w-full h-full" href={(item.disabled) ? "#": item.link}>
                    <Button
                      variant="ghost"
                      disabled={item.disabled}
                      className="rounded-t-none w-full text-muted-foreground"
                    >
                      <item.buttonIcon />{" "}
                      <span className="hidden sm:inline">
                        {item.buttonDesc}
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
