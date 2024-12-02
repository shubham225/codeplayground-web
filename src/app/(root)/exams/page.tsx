"use client";

import ButtonWithDetails from "@/components/custom-ui/button/ButtonWithDetails";
import ButtonWithIcon from "@/components/custom-ui/button/ButtonWithIcon";
import { JoinExam } from "@/components/dialogs/join-exam";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Laptop, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [openJoin, setOpenJoin] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  const handleJoinExamClick : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpenJoin(true);
  }

  return (
    <div>
      <div className="flex justify-between">
        <PageHeader
          title="Exam Management"
          subtitle="Participate in or build a custom exams with selected questions"
        />
        <div className="flex gap-2">
        <Button variant="outline" className="aspect-square max-sm:p-0" onClick={handleJoinExamClick}>
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
      <div className="flex flex-col gap-4 mt-14">
        <JoinExam open={openJoin} onOpenChange={setOpenJoin}/>
      </div>
    </div>
  );
}

