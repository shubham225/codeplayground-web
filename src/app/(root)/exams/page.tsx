"use client";

import ShareButton from "@/components/custom-ui/button/ShareButton";
import { JoinExam } from "@/components/dialogs/join-exam";
import PageHeader from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

const examsList = [
  { examId: "1f32e3", name: "Exam 1", status: "pending" },
  { examId: "1f32e4", name: "Exam 2", status: "in progress" },
  { examId: "1f32a3", name: "Exam 3", status: "completed" },
  { examId: "1f33e3", name: "Exam 4", status: "failed" },
  { examId: "1f22e3", name: "Exam 5", status: "pending" },
  { examId: "1f3ff3", name: "Exam 6", status: "pending" },
];

export default function page({}: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [openJoin, setOpenJoin] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  const handleJoinExamClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    setOpenJoin(true);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <PageHeader
          title="Exam Management"
          subtitle="Participate in or build a custom exams with selected questions"
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="aspect-square max-sm:p-0"
            onClick={handleJoinExamClick}
          >
            <Laptop
              className="opacity-90 sm:-ms-1 sm:me-2"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Join Exam</span>
          </Button>
          <Button className="aspect-square max-sm:p-0">
            <Plus
              className="opacity-90 sm:-ms-1 sm:me-2"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Create Exam</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {examsList.map((exam) => (
          <Card>
            <CardHeader>
              <div className="flex justify-between">
              <div>
              <CardTitle>{exam.name}</CardTitle>
              <CardDescription>Exam for SDE-2</CardDescription>
              </div>
              <ShareButton />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                Questions: 20 Total Marks: 100
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <h1>Marks : 10/20</h1>
                <Badge className="bg-green-400 hover:bg-green-400">{exam.status}</Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-14">
        <JoinExam open={openJoin} onOpenChange={setOpenJoin} />
      </div>
    </div>
  );
}
