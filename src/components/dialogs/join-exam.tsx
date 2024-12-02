"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SimpleInput from "../custom-ui/input/SimpleInput";

type Props = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function JoinExam({ open, onOpenChange, ...props }: Props) {
  const router = useRouter();
  const [examId, setExamId] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Exam</DialogTitle>
          <DialogDescription>
            Join exams to test your coding skills and challenge yourself with
            timed problems.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full">
          <div className="grid grid-cols-1 items-center gap-4 w-full">
            <SimpleInput
              id="exam-id"
              label="Join Exam"
              placeholder="Ex. 8bdd7e5c-46d9-4574-ae9f-81288d6755e9"
              value={examId}
              onChange={(e) => {
                e.preventDefault();
                setExamId(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => router.push(`/exams/join-exam/${examId}`)}
          >
            Join
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
