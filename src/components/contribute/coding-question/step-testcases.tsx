import Dropzone from "@/components/custom-ui/dropzone";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DropZone } from "react-aria-components";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
};

export default function TestCasesDetails({ setStep, data, setData }: Props) {
  const [testcases, setTestCases] = useState<File[]>([]);
  const [solutions, setSolutions] = useState<File[]>([]);

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-1 h-[673px]">
        <div>
          <h1 className="text-2xl font-bold">Upload Solution</h1>
          <h4 className="text-md text-muted-foreground">
            upload your solution to help the candidates debug their code and see
            the expected output for their custom input.
          </h4>
          <div className="h-48 mt-4 w-full">
            <Dropzone uploadFiles={solutions} setUploadFiles={setSolutions} />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold">Testcases</h1>
          <h4 className="text-md text-muted-foreground">
            A testcase consists of input values to the program and expected
            output.
          </h4>
          <br></br>
          <div className="h-48 mt-4">
            <Dropzone uploadFiles={testcases} setUploadFiles={setTestCases} />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2">
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
