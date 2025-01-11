import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = { setStep: React.Dispatch<React.SetStateAction<string>> };

const languages = [
  {
    id: "#123",
    name: "Java",
    selected: true,
  },
  {
    id: "#124",
    name: "C++",
    selected: true,
  },
  {
    id: "#125",
    name: "C",
    selected: true,
  },
  {
    id: "#126",
    name: "Javascript",
    selected: true,
  },
  {
    id: "#127",
    name: "Python",
    selected: true,
  },
  {
    id: "#128",
    name: "Go",
    selected: true,
  },
  {
    id: "#129",
    name: "Haskell",
    selected: true,
  },
  {
    id: "#120",
    name: "Rust",
    selected: true,
  },
];

export default function LanguagesDetails({ setStep }: Props) {
  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col h-[673px]">
        <h1 className="text-2xl font-bold">Languages</h1>
        <h4 className="text-md text-muted-foreground">
          Candidates will have option to solve problems in selected languages
        </h4>
        <div className="flex flex-col gap-3 pt-6">
          <h2 className="text-lg">Select Languages</h2>
          <div className="grid grid-cols-4 gap-4">
            {languages.map((language) => {
              return (
                <div className="flex items-center gap-2">
                  <Checkbox id={language.id} />
                  <Label htmlFor={language.id}>{language.name}</Label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
