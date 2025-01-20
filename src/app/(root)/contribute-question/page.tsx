"use client";

import React, { useState } from "react";
import PageHeader from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ContributeQuestion from "@/components/dialogs/contribute-question";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleContributeCodingQues: React.MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5">
      <PageHeader
        title="Contribute Question"
        subtitle="Submit your own coding problems to the platform"
      />
      <div className="flex flex-col gap-4 mt-14">
        <Label className="font-bold text-xl">Select Question Type</Label>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
          <Link href="/contribute-question/coding">
            <Card className="h-40 bg-transparent hover:bg-accent">
              <CardHeader>
                <CardTitle className="self-start">Coding</CardTitle>
                <CardDescription className="self-start">
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/contribute-question/multiple-choice">
            <Card className="h-40 bg-transparent hover:bg-accent">
              <CardHeader>
                <CardTitle className="self-start">Multiple Choice</CardTitle>
                <CardDescription className="self-start">
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* // TODO: Implementation
          <Link href="/contribute-question/subjective">
            <Card className="h-40 bg-transparent hover:bg-accent">
              <CardHeader>
                <CardTitle className="self-start">Subjective</CardTitle>
                <CardDescription className="self-start">
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link> */}
        </div>
      </div>
      <div className="size-full">
        <ContributeQuestion open={openDialog} onOpenChange={setOpenDialog} />
      </div>
    </div>
  );
}
