import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Box,
  ChartLine,
  Code,
  FileCode,
  FileCode2,
  FileQuestion,
  HelpCircle,
  House,
  Languages,
  PanelsTopLeft,
  ScrollText,
  Settings,
  UsersRound,
} from "lucide-react";
import QuestionDetails from "@/components/contribute/coding-question/step-question-details";
import LanguagesDetails from "@/components/contribute/coding-question/step-languages";
import CodeStubDetails from "@/components/contribute/coding-question/step-code-stub";
import TestCases from "@/components/problem/test-cases";
import TestCasesDetails from "@/components/contribute/coding-question/step-testcases";

type Props = {};

export default function ContributeCoding({}: Props) {
  return (
    <div className="m-3 border rounded-lg h-[95%]">
      <Tabs defaultValue="step-1">
        <TabsList className="mb-3 h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground w-full">
          <TabsTrigger
            value="step-1"
            className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            <p className="hidden md:inline-flex text-muted-foreground pr-3">Step 1:</p>
            <HelpCircle
              className="hidden md:inline-flex -ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Question Details
          </TabsTrigger>
          <TabsTrigger
            value="step-2"
            className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            <p className="hidden md:inline-flex text-muted-foreground pr-3">Step 2:</p>
            <Code
              className="hidden md:inline-flex -ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Languages
          </TabsTrigger>
          <TabsTrigger
            value="step-3"
            className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            <p className="hidden md:inline-flex text-muted-foreground pr-3">Step 3:</p>
            <FileCode2
              className="hidden md:inline-flex -ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Code Stub
          </TabsTrigger>
          <TabsTrigger
            value="step-4"
            className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            <p className="hidden md:inline-flex text-muted-foreground pr-3">Step 4:</p>
            <ScrollText
              className="hidden md:inline-flex -ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Testcases
          </TabsTrigger>
        </TabsList>
        <TabsContent value="step-1">
          <QuestionDetails />
        </TabsContent>
        <TabsContent value="step-2">
          <LanguagesDetails />
        </TabsContent>
        <TabsContent value="step-3">
          <CodeStubDetails />
        </TabsContent>
        <TabsContent value="step-4">
          <TestCasesDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
}
