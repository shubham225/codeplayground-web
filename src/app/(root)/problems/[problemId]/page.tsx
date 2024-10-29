"use client";

import CodeWindow from "@/components/problem/code-window";
import ProblemInfo from "@/components/problem/problem-info";
import TestCases from "@/components/problem/test-cases";
import { Card } from "@/components/ui/card";
import { initCodeLangDetails, initProblemDetails } from "@/constants/data";
import { fetchProblemsById } from "@/services/problemService";
import { CodeLangDetails, Problem } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Split from "react-split";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const ProblemPage = (props: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [problem, setProblem] = useState<Problem>(initProblemDetails);
  const [codes, setCodes] = useState<CodeLangDetails>(initCodeLangDetails);
  const params = useParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchProblemByIdAsync = async () => {
      const problemID = params.problemId;

      if (typeof problemID !== "string") return;

      const response = await fetchProblemsById(problemID);
      setProblem(response);
    };

    fetchProblemByIdAsync();
  }, [params.problemId]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Split
        className="flex size-full"
        sizes={[50, 50]}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="border size-full rounded-md dark:bg-[#1e1e1e]">
          <ProblemInfo problem={problem} />
        </div>
        <div className="size-full flex flex-col">
          <Split className="size-full" sizes={[65, 35]} direction="vertical">
            <Card className="flex flex-col border gap-2 size-full rounded-md dark:bg-[#1e1e1e]">
              <CodeWindow
                problem={problem}
                codeInfo={codes}
                setCodeInfo={setCodes}
              />
            </Card>
            <div className="flex flex-col border gap-2 size-full rounded-md dark:bg-[#1e1e1e]">
              <TestCases problem={problem} codeInfo={codes} />
            </div>
          </Split>
        </div>
      </Split>
    </>
  );
};

export default ProblemPage;
