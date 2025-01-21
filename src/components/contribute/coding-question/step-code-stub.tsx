"use client";

import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { java } from "@codemirror/lang-java";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { Braces, Plus, X } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

type Props = { setStep: React.Dispatch<React.SetStateAction<string>> };

const initCode = "int addNumbers(int a, int b) {\n //Write your code here\n}";
const parameters = [
  { id: "1" },
  { id: "2" },
  // { id: "3" },
  // { id: "4" },
  // { id: "5" },
  // { id: "6" },
  // { id: "7" },
  // { id: "8" },
];

export default function CodeStubDetails({ setStep }: Props) {
  const { theme } = useTheme();
  const [code, setCode] = React.useState<string>(initCode);

  const onCodeChange = React.useCallback(
    (value: string, viewUpdate: ViewUpdate) => {
      setCode(value);
    },
    []
  );

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2 h-[673px] overflow-auto">
        <h1 className="text-md font-semibold mb-2">Function declaration</h1>
        <div className="flex gap-3">
          <SimpleInput
            id="function-name"
            label="Function Name"
            placeholder="Declare a function name"
          />
          <div className="space-y-1 w-full">
            <Label htmlFor="return-type">Return Type</Label>
            <SelectNative id="return-type">
              <option value="1">Integer</option>
              <option value="2">Float</option>
              <option value="3">String</option>
              <option value="4">Boolean</option>
            </SelectNative>
          </div>
        </div>
        <h1 className="text-md font-semibold my-2">Function Parameters</h1>
        {parameters.map((item) => {
          return (
            <div className="flex gap-3 items-center" key={item.id}>
              <div className="space-y-1 w-full">
                <Label htmlFor="parameter-type">Parameter Type</Label>
                <SelectNative id="parameter-type">
                  <option value="1">Integer</option>
                  <option value="2">Float</option>
                  <option value="3">String</option>
                  <option value="4">Boolean</option>
                </SelectNative>
              </div>
              <SimpleInput
                id={item.id}
                label="Parameter Name"
                placeholder="Give a name to function parameter"
              />
              <Button variant="ghost" size="icon" className="gap-2 mt-6 p-3">
                <X size={18} />
              </Button>
            </div>
          );
        })}
        <div className="flex">
          <Button variant="ghost" size="sm" className="gap-2">
            <Plus size={18} /> Add a function parameter
          </Button>
        </div>
        <Card className="flex flex-col border gap-2 h-96 mt-2 rounded-md dark:bg-[#1e1e1e]">
          <div className="flex flex-col gap-1 h-full">
            <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
              <div className="flex gap-1 items-center p-1">
                <Braces className="dark:text-teal-400 text-teal-500 p-1" />
                <h1 className="text-sm font-semibold">Code Preview</h1>
              </div>
            </div>
            <div className="overflow-auto h-full">
              <CodeMirror
                value={code}
                extensions={[java()]}
                onChange={onCodeChange}
                theme={theme === "light" ? vscodeLight : vscodeDark}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="flex flex-row-reverse gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStep("step-4");
          }}
        >
          Next
        </Button>
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setStep("step-2");
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}
