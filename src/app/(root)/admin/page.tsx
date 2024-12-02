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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Tabs defaultValue="question-management">
        <div className="flex justify-between">
          <PageHeader
            title="Admin Panal"
            subtitle="Centralized hub to manage challenges, users, and platform content"
          />
          <TabsList>
            <TabsTrigger value="question-management">
              Question Management
            </TabsTrigger>
            <TabsTrigger value="testcase-management">
              Test Case Management
            </TabsTrigger>
            <TabsTrigger value="user-activity">User Activity</TabsTrigger>
            <TabsTrigger value="miscellaneous">Miscellaneous</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="question-management">
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
        </TabsContent>
        <TabsContent value="user-activity">
          <div>User Activity</div>
        </TabsContent>
        <TabsContent value="testcase-management">
          <div>Testcase Management</div>
        </TabsContent>
        <TabsContent value="miscellaneous">
          <div>Miscellaneous</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
