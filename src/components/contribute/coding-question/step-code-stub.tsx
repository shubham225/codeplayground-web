"use client";

import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { generateJavaCodeStub } from "@/lib/utils";
import { CodeStub } from "@/types";
import { java } from "@codemirror/lang-java";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { Braces, Plus, X } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useId } from "react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
};

const initCode = "int addNumbers(int a, int b) {\n //Write your code here\n}";
const parameters = [{ id: "1" }, { id: "2" }];

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const initCodeStub: CodeStub = {
  functionName: "solve",
  returnType: "void",
  parameters: [],
};

export default function CodeStubDetails({ setStep, data, setData }: Props) {
  const { theme } = useTheme();
  const [code, setCode] = React.useState<string>("");
  const [codestub, setCodestub] = React.useState<CodeStub>(initCodeStub);

  React.useEffect(() => {
    regenerateCode();
  }, [codestub]);

  const onFunctionNameChange = (e: any) => {
    setCodestub((codestub) => ({
      ...codestub,
      functionName: e.target.value,
    }));
  };

  const onReturnTypeChange = (e: any) => {
    setCodestub((codestub) => ({
      ...codestub,
      returnType: e.target.value,
    }));
  };

  const onAddNewParam = () => {
    setCodestub((codestub) => ({
      ...codestub,
      parameters: [
        ...codestub.parameters,
        {
          id: guidGenerator(),
          name: "argument" + (codestub.parameters.length + 1),
          type: "int",
          isArray: false,
        },
      ],
    }));
  };

  const onRemoveParam = (id: string) => {
    const updatedList = codestub.parameters.filter((params) => params.id != id);

    setCodestub((codestub) => ({
      ...codestub,
      parameters: updatedList,
    }));
  };

  const onParameterTypeChange = (e: any) => {
    const updatedList = codestub.parameters.map((parameter) => {
      if (parameter.id == e.target.id) {
        parameter.type = e.target.value;
      }

      return parameter;
    });
    setCodestub((codestub) => ({
      ...codestub,
      parameters: updatedList,
    }));
  };

  const onParameterNameChange = (e: any) => {
    const updatedList = codestub.parameters.map((parameter) => {
      if (parameter.id == e.target.id) {
        parameter.name = e.target.value;
      }

      return parameter;
    });
    setCodestub((codestub) => ({
      ...codestub,
      parameters: updatedList,
    }));
  };

  const onParameterIsArrayChange = (itemId: string, val: any) => {
    const updatedList = codestub.parameters.map((parameter) => {
      if (parameter.id == itemId) {
        parameter.isArray = val;
      }

      return parameter;
    });

    setCodestub((codestub) => ({
      ...codestub,
      parameters: updatedList,
    }));
  };

  const regenerateCode = () => {
    let code = generateJavaCodeStub(codestub);
    setCode(code);
  };

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2 h-[673px] overflow-auto px-1">
        <h1 className="text-md font-semibold mb-2">Function declaration</h1>
        <div className="flex gap-3">
          <SimpleInput
            id="function-name"
            label="Function Name"
            value={codestub.functionName}
            onChange={onFunctionNameChange}
            placeholder="Declare a function name"
          />
          <div className="space-y-1 w-full">
            <Label htmlFor="return-type">Return Type</Label>
            <SelectNative
              id="return-type"
              value={codestub.returnType}
              onChange={onReturnTypeChange}
            >
              <option value="int">Integer</option>
              <option value="float">Float</option>
              <option value="String">String</option>
              <option value="boolean">Boolean</option>
            </SelectNative>
          </div>
        </div>
        <h1 className="text-md font-semibold my-2">Function Parameters</h1>
        {codestub.parameters.map((item) => {
          return (
            <div className="flex gap-3 items-center" key={item.id}>
              <div className="space-y-1 w-full">
                <Label htmlFor={item.id}>Parameter Type</Label>
                <SelectNative
                  id={item.id}
                  value={item.type}
                  onChange={onParameterTypeChange}
                >
                  <option value="int">Integer</option>
                  <option value="float">Float</option>
                  <option value="String">String</option>
                  <option value="boolean">Boolean</option>
                </SelectNative>
              </div>
              <div className="w-full flex-grow">
                <SimpleInput
                  id={item.id}
                  label="Parameter Name"
                  placeholder="Give a name to function parameter"
                  value={item.name}
                  onChange={onParameterNameChange}
                />
              </div>
              <div className="space-y-2">
                <Label>isArray</Label>
                <div className="relative">
                  <Checkbox
                    id={"item.id"}
                    checked={item.isArray}
                    onCheckedChange={(val) =>
                      onParameterIsArrayChange(item.id, val)
                    }
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="gap-2 mt-6 p-3"
                onClick={(e) => {
                  e.preventDefault();
                  onRemoveParam(item.id);
                }}
              >
                <X size={18} />
              </Button>
            </div>
          );
        })}
        <div className="flex">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={onAddNewParam}
          >
            <Plus size={18} /> Add a function parameter
          </Button>
        </div>
        <Card className="flex flex-col border gap-2 h-96 mt-2 rounded-md dark:bg-[#1e1e1e]">
          <div className="flex flex-col gap-1 h-full">
            <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
              <div className="flex gap-1 items-center p-1">
                <Braces className="dark:text-teal-400 text-teal-500 p-1" />
                <h1 className="text-sm font-semibold">Code Preview | Java</h1>
              </div>
            </div>
            <div className="overflow-auto h-52">
              <CodeMirror
                value={code}
                extensions={[java()]}
                readOnly={true}
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
            setData((data: any) => ({ ...data, codeStub: codestub }));
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
