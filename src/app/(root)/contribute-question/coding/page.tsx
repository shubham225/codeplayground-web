"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, FileCode2, HelpCircle, ScrollText } from "lucide-react";
import QuestionDetails from "@/components/contribute/coding-question/step-question-details";
import LanguagesDetails from "@/components/contribute/coding-question/step-languages";
import CodeStubDetails from "@/components/contribute/coding-question/step-code-stub";
import TestCases from "@/components/problem/test-cases";
import TestCasesDetails from "@/components/contribute/coding-question/step-testcases";
import StepFinish from "@/components/contribute/coding-question/step-finish";

type Props = {};

export default function ContributeCoding({}: Props) {
  const [step, setStep] = useState("step-1");
  const [question, setQuestion] = useState({});

  return (
    <div className="m-3 border rounded-lg">
      {step !== "finish" ? (
        <Tabs defaultValue={step} value={step}>
          <TabsList className="mb-3 h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground w-full">
            <TabsTrigger
              value="step-1"
              className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
            >
              <p className="hidden md:inline-flex text-muted-foreground pr-3">
                Step 1:
              </p>
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
              className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
            >
              <p className="hidden md:inline-flex text-muted-foreground pr-3">
                Step 2:
              </p>
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
              className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
            >
              <p className="hidden md:inline-flex text-muted-foreground pr-3">
                Step 3:
              </p>
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
              className="relative w-full after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
            >
              <p className="hidden md:inline-flex text-muted-foreground pr-3">
                Step 4:
              </p>
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
            <QuestionDetails
              setStep={setStep}
              data={question}
              setData={setQuestion}
            />
          </TabsContent>
          <TabsContent value="step-2">
            <LanguagesDetails
              setStep={setStep}
              data={question}
              setData={setQuestion}
            />
          </TabsContent>
          <TabsContent value="step-3">
            <CodeStubDetails
              setStep={setStep}
              data={question}
              setData={setQuestion}
            />
          </TabsContent>
          <TabsContent value="step-4">
            <TestCasesDetails
              setStep={setStep}
              data={question}
              setData={setQuestion}
            />
          </TabsContent>
        </Tabs>
      ) : (
        <StepFinish data={question} setData={setQuestion} />
      )}
    </div>
  );
}
