import ContributeQuestion from "@/components/dialogs/contribute-question";
import PageHeader from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            List of Questions with edit option
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
