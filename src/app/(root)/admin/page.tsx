import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="size-full p-6">
      <div className="size-full flex flex-col border rounded-lg p-3 gap-4">
        <Label className="font-bold text-xl">Select Question Type</Label>
        <div className="flex gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Coding</CardTitle>
              <CardDescription>
                General purpose programming in varity of languages.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multiple Choice</CardTitle>
              <CardDescription>
                General purpose programming in varity of languages.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subjective</CardTitle>
              <CardDescription>
                General purpose programming in varity of languages.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
