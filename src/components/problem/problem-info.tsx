import React from "react";
import { FileText, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProblemDescription from "./problem-description";
import ProblemResult from "./problem-result";
import { Problem } from "@/types";

type Props = {
  problem: Problem;
};

const ProblemInfo = ({ problem, ...props }: Props) => {
  return (
    <Tabs defaultValue="description" className="flex flex-col w-full">
      <TabsList className="flex flex-row justify-start dark:bg-[#333333] bg-gray-50 rounded-t-md rounded-b-none p-0 w-full h-8">
        <TabsTrigger
          value="description"
          className="data-[state=active]:bg-transparent"
        >
          <div className="flex gap-1 items-center">
            <FileText className="dark:text-teal-400 text-teal-500 p-1" />
            <h1 className="text-l">Description</h1>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="result"
          className="data-[state=active]:bg-transparent"
        >
          <div className="flex gap-1 items-center">
            <History className="dark:text-teal-400 text-teal-500 p-1" />
            <h1 className="text-l">Result</h1>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div className="flex flex-col gap-1 h-full">
          <ProblemDescription problem={problem} />
        </div>
      </TabsContent>
      <TabsContent value="result">
        <ProblemResult problem={problem} />
      </TabsContent>
    </Tabs>
  );
};

export default ProblemInfo;
