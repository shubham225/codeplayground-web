import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="size-full p-5">
      <PageHeader title="Admin Panal" subtitle="modify setting" />
      <div className="flex flex-col gap-4">
        <Label className="font-bold text-xl">Select Option</Label>
        <div className="flex gap-4">
          <Link href="/admin/contribute-question">
            <Button variant="outline" className="h-40">
              <CardHeader>
                <CardTitle className="self-start">
                  Contribute Question
                </CardTitle>
                <CardDescription className="self-start">
                  Submit your own coding problems to the platform.
                </CardDescription>
              </CardHeader>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
