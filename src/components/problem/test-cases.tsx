"use client";

import { initTestExecution } from "@/constants/data";
import { cn, getCodeforLanguage } from "@/lib/utils";
import {
  submitAndCompileCode,
  submitAndExecuteCode,
} from "@/services/problemService";
import { CodeLangDetails, Problem, TestExecution } from "@/types";
import { ExecReq, SubmitReq } from "@/types/api";
import { Check, Loader2, SquareCheck, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";

type Props = { problem: Problem; codeInfo: CodeLangDetails };

enum CodeStatus {
  NO_ACTION = 0,
  UPLOADED = 1,
  COMPILING = 2,
  COMPILATION_ERROR = 3,
  RUNNING = 4,
  RUNTIME_ERROR = 5,
  TESTCASE_FAILED = 6,
  SUCCESS = 7,
}

const TestCases = ({ problem, codeInfo, ...props }: Props) => {
  const [execStatus, setExecStatus] = useState<CodeStatus>(
    CodeStatus.NO_ACTION
  );
  const [testCaseExec, setTestCaseExec] =
    useState<TestExecution>(initTestExecution);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (execStatus === CodeStatus.SUCCESS)
      toast.success("Congratulations, Solution is Accepted...");
  }, [execStatus]);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const comileAndExecuteCodeAsync = async () => {
    setDisableSubmit(true);
    setExecStatus(CodeStatus.COMPILING);
    setTestCaseExec((prev) => {
      return { ...prev, status: "COMPILING" };
    });

    const submitReq: SubmitReq = {
      problemId: problem.id,
      code: getCodeforLanguage(codeInfo.codes, codeInfo.selLanguage),
      language: codeInfo.selLanguage,
    };

    console.log(codeInfo, submitReq);

    const responseCompile = await submitAndCompileCode(submitReq);

    setExecStatus(CodeStatus.UPLOADED);
    const execRequest: ExecReq = {
      userProblemId: responseCompile.submission.userProblemId,
      language: codeInfo.selLanguage,
    };

    const responseExec = await submitAndExecuteCode(execRequest);

    console.log(responseExec);

    if (responseExec.status === "COMPILATION_FAILED") {
      setExecStatus(CodeStatus.COMPILATION_ERROR);
      setTestCaseExec({
        status: responseExec.status,
        message: responseExec.message,
      });
      setDisableSubmit(false);
      return;
    }

    if (responseExec.status === "RUNTIME_ERROR") {
      setExecStatus(CodeStatus.RUNTIME_ERROR);
      setTestCaseExec({
        status: "RUNTIME_ERROR",
        message: responseExec.message,
      });
      setDisableSubmit(false);
      return;
    }

    if (
      responseExec.status === "WRONG_ANSWER" ||
      responseExec.status === "TIME_LIMIT_EXCEEDED"
    ) {
      setExecStatus(CodeStatus.TESTCASE_FAILED);
      setTestCaseExec({
        status: "TESTCASE_FAILED",
        message: responseExec.message,
      });
      setDisableSubmit(false);
      return;
    }

    if (responseExec.status === "ACCEPTED") {
      setExecStatus(CodeStatus.SUCCESS);
      setTestCaseExec({
        status: "SUCCESS",
        message: responseExec.message,
      });
    }
    setDisableSubmit(false);
  };

  const submitTheCode = React.useCallback(() => {
    comileAndExecuteCodeAsync();
  }, [codeInfo, problem, execStatus]);

  return (
    <div className="flex flex-col h-full space-between">
      <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
        <div className="flex gap-1 p-1">
          <SquareCheck className="dark:text-teal-400 text-teal-500 p-1" />
          <h1 className="text-l font-semibold">Testcase</h1>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <div
          className={cn("p-2 size-full flex flex-col gap-2", {
            hidden: execStatus === CodeStatus.NO_ACTION,
          })}
        >
          {/* Upload */}
          <div className="flex gap-2">
            {execStatus < CodeStatus.UPLOADED && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Uploading Code...</h1>
              </>
            )}
            {execStatus >= CodeStatus.UPLOADED && (
              <>
                <Check className="text-green-500" />
                <h1 className="text-sm font-medium">Upload Successful</h1>
              </>
            )}
          </div>
          {/* Compilation  */}
          <div className="flex gap-2">
            {execStatus <= CodeStatus.COMPILING && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Compiling Code...</h1>
              </>
            )}{" "}
            {execStatus === CodeStatus.COMPILATION_ERROR && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Compilation Error:</h1>
              </>
            )}
            {execStatus > CodeStatus.COMPILATION_ERROR && (
              <>
                <Check className="text-green-500" />
                <h1 className="text-sm font-medium">Compilation Successful</h1>
              </>
            )}
          </div>
          <div
            className={cn("flex gap-2", {
              hidden: execStatus === CodeStatus.COMPILATION_ERROR,
            })}
          >
            {execStatus == CodeStatus.RUNNING && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Validating Testcases...</h1>
              </>
            )}
            {execStatus === CodeStatus.RUNTIME_ERROR && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Runtime Error:</h1>
              </>
            )}
            {execStatus === CodeStatus.TESTCASE_FAILED && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Testcases failed:</h1>
              </>
            )}
            {execStatus > CodeStatus.TESTCASE_FAILED && (
              <>
                <Check className="text-green-500" />
                <h1 className="text-sm font-medium">All testcases passed</h1>
              </>
            )}
          </div>
          <Card
            className={cn(
              "px-1 text-xs leading-4 font-mono whitespace-pre-wrap",
              {
                hidden:
                  execStatus !== CodeStatus.COMPILATION_ERROR &&
                  execStatus !== CodeStatus.RUNTIME_ERROR &&
                  execStatus !== CodeStatus.TESTCASE_FAILED,
              }
            )}
          >
            {testCaseExec.message.replaceAll("\n", "\n")}
          </Card>
        </div>
      </div>
      <footer>
        <div className="flex flex-row space-between p-2">
          <div className="flex-grow"></div>
          <div className="flex gap-2">
            <Link href={"/problems"}>
              <Button variant="outline">Close</Button>
            </Link>
            <Button
              variant="default"
              onClick={submitTheCode}
              disabled={disableSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestCases;
