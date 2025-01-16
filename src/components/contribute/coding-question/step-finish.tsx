import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = { setStep: React.Dispatch<React.SetStateAction<string>> };

export default function StepFinish({ setStep }: Props) {
  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col justify-center items-center gap-3 h-[740px]">
        <BadgeCheck className="h-28 w-28 text-green-500" />
        <h1 className="text-2xl font-bold">Success</h1>
        <h4 className="text-md text-muted-foreground">
          Question has been created successfully.
        </h4>
        <div className="flex flex-col rounded-lg border bg-transparent p-5 w-80 h-32">
          <div className="flex justify-between">
            <h4 className="text-sm">Question ID:</h4>
            <h4 className="text-sm">#4523f524</h4>
          </div>
          <div className="flex justify-between">
            <h4 className="text-sm">Question Summery:</h4>
            <h4 className="text-sm">Add two numbers</h4>
          </div>
        </div>
        <Link href={"/contribute-question"}>
          <Button>Return to Homepage</Button>
        </Link>
      </div>
    </div>
  );
}
