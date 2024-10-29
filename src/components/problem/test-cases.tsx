"use client"

import React, { useEffect, useState } from "react";
import { Check, Loader2, SquareCheck, X } from "lucide-react";
import { Card } from "../ui/card";
import { cn, getCodeforLanguage } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast, ToastContainer } from "react-toastify";
import { CodeLangDetails, Problem, TestExecution } from "@/types";
import {
  submitAndCompileCode,
  submitAndExecuteCode,
} from "@/services/problemService";
import { initTestExecution } from "@/constants/data";

type Props = { problem: Problem; codeInfo: CodeLangDetails };

enum CodeStatus {
  NO_ACTION = 0,
  COMPILING = 1,
  COMPILATION_ERROR = 2,
  RUNNING = 3,
  RUNTIME_ERROR = 4,
  TESTCASE_FAILED = 5,
  SUCCESS = 6,
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

    // TODO: Remove the delay after testing
    await delay(5000);
    const responseCompile = await submitAndCompileCode(problem.id);

    console.log(responseCompile);

    if (responseCompile.status === "COMPILATION_FAILED") {
      setExecStatus(CodeStatus.COMPILATION_ERROR);
      setTestCaseExec({
        status: responseCompile.status,
        message: responseCompile.message,
      });
      setDisableSubmit(false);
      return;
    }

    setExecStatus(CodeStatus.RUNNING);

    // TODO: Remove the delay after testing
    await delay(5000);
    const responseExec = await submitAndExecuteCode(problem.id);

    if (responseExec.status === "RUNTIME_ERROR") {
      setExecStatus(CodeStatus.RUNTIME_ERROR);
      setTestCaseExec({
        status: responseExec.status,
        message: responseExec.message,
      });
      setDisableSubmit(false);
      return;
    }

    if (responseExec.status === "TESTCASE_FAILED") {
      setExecStatus(CodeStatus.TESTCASE_FAILED);
      setTestCaseExec({
        status: responseExec.status,
        message: responseExec.message,
      });
      setDisableSubmit(false);
      return;
    }

    if (responseExec.status === "SUCCESS") {
      setExecStatus(CodeStatus.SUCCESS);
      setTestCaseExec({
        status: responseExec.status,
        message: responseExec.message,
      });
    }
    setDisableSubmit(false);
  };

  const submitTheCode = React.useCallback(() => {
    const code = getCodeforLanguage(codeInfo.codes, codeInfo.selLanguage);

    comileAndExecuteCodeAsync();
  }, [problem, execStatus]);

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
          {/* Compilation  */}
          <div className="flex gap-2">
            {execStatus <= CodeStatus.COMPILING && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Compiling...</h1>
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
            {execStatus <= CodeStatus.RUNNING && (
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
            className={cn("p-1 text-xs leading-4 font-mono", {
              hidden:
                execStatus !== CodeStatus.COMPILATION_ERROR &&
                execStatus !== CodeStatus.RUNTIME_ERROR &&
                execStatus !== CodeStatus.TESTCASE_FAILED,
            })}
          >
            {testCaseExec.message}
          </Card>
        </div>
      </div>
      <footer>
        <div className="flex flex-row space-between p-2">
          <div className="flex-grow"></div>
          <div className="flex gap-2">
            <Button variant="secondary">Run</Button>
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
      <ToastContainer />
    </div>
  );
};

export default TestCases;
