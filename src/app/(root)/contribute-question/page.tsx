"use client";

import React, { useState } from "react";
import PageHeader from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ContributeQuestion from "@/components/dialogs/contribute-question";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  // const [openDialog, setOpenDialog] = useState<boolean>(false);

  // const handleContributeCodingQues: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="h-full w-full">
      {/* <PageHeader
        title="Contribute Question"
        subtitle="Submit your own coding problems to the platform"
      /> */}
      {/* <Label className="font-bold text-xl">Select Question Type</Label> */}
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-2">
          <Link href="/contribute-question/coding">
            <Card className="h-full hover:bg-accent">
              <CardHeader>
                <CardTitle>Coding</CardTitle>
                <CardDescription >
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/contribute-question/multiple-choice">
            <Card className="h-40 hover:bg-accent">
              <CardHeader>
                <CardTitle>Multiple Choice</CardTitle>
                <CardDescription>
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/contribute-question/coding">
            <Card className="h-full hover:bg-accent">
              <CardHeader>
                <CardTitle>Coding</CardTitle>
                <CardDescription>
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/contribute-question/coding">
            <Card className="h-40 hover:bg-accent">
              <CardHeader>
                <CardTitle>Coding</CardTitle>
                <CardDescription >
                  General purpose programming in varity of languages.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
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
      {/* <div className="size-full">
        <ContributeQuestion open={openDialog} onOpenChange={setOpenDialog} />
      </div> */}
    </div>
  );
}
