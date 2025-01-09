import { Button } from "@/components/ui/button";
import React from "react";

type Props = { setStep: React.Dispatch<React.SetStateAction<string>> };

export default function LanguagesDetails({ setStep }: Props) {
  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2 h-[673px]"></div>
      <div className="flex flex-row-reverse gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStep("step-3");
          }}
        >
          Next
        </Button>
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setStep("step-1");
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}
