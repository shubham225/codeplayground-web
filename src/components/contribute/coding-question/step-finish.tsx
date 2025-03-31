"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheck, Loader2Icon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = { data: any; setData: any };

export default function StepFinish({ data, setData }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      {isLoading ? (
        <div className="flex gap-4 text-2xl justify-center items-center h-[740px]">
          <Loader2Icon className="animate-spin" />
          <h1>Creating New Question</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 h-[740px]">
          <BadgeCheck className="h-28 w-28 text-green-500" />
          <h1 className="text-2xl font-bold">Success</h1>
          <h4 className="text-md text-muted-foreground">
            Question has been created successfully.
          </h4>
          <div className="flex flex-col rounded-lg border bg-transparent p-4 w-96 h-32 text-sm">
            <div className="flex justify-between">
              <h4>Question ID:</h4>
              <h4>#3853d3</h4>
            </div>
            <div className="flex justify-between">
              <h4>Question Summery:</h4>
              <h4>Two Sum</h4>
            </div>
          </div>
          <Link href={"/contribute-question"}>
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
