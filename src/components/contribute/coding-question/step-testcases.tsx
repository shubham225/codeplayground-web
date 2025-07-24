"use client"

import Dropzone from "@/components/custom-ui/dropzone";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UploadedFiles } from "@/types";
import { useState } from "react";
import { DropZone } from "react-aria-components";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
};

export default function TestCasesDetails({ setStep, data, setData }: Props) {
  const [testcases, setTestCases] = useState<UploadedFiles[]>([]);
  const [solutions, setSolutions] = useState<UploadedFiles[]>([]);

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="grid lg:grid-cols-2 gap-4 w-full">
        <div className="p-4 flex flex-col gap-2 items-center">
          <h1 className="text-lg font-semibold">Upload a solution</h1>
          <h4 className="text-sm text-muted-foreground">
            Upload your solution to help the candidates see the expected output for their custom input.
          </h4>
          <div className="mt-4 h-96 w-full">
            <Dropzone uploadFiles={solutions} setUploadFiles={setSolutions} />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2 items-center ">
          <h1 className="text-lg font-bold">Testcases</h1>
          <h4 className="text-sm text-muted-foreground">
            A testcase consists of input values to the program and expected
            output.
          </h4>
          <div className="mt-4 h-96 w-full">
            <Dropzone uploadFiles={testcases} setUploadFiles={setTestCases} />
          </div>
        </div>
      </div>
      <div className="mt-44 flex flex-row-reverse gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setData((data: any) => ({
              ...data,
              testcases: testcases,
              solutions: solutions,
            }));
            setStep("finish");
          }}
        >
          Finish
        </Button>
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setStep("step-3");
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}
