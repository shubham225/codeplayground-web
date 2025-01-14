import Dropzone from "@/components/custom-ui/dropzone";
import { Button } from "@/components/ui/button";
import { DropZone } from "react-aria-components";

type Props = { setStep: React.Dispatch<React.SetStateAction<string>> };

export default function TestCasesDetails({ setStep }: Props) {
  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-1 h-[673px]">
        <h1 className="text-2xl font-bold">Testcases</h1>
        <h4 className="text-md text-muted-foreground">
          A testcase consists of input values to the program and expected output.
        </h4>
        <br></br>
        <Dropzone />
      </div>
      <div className="flex flex-row-reverse gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStep("step-1");
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
