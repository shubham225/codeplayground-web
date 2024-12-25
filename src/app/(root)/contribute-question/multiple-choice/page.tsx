"use client";

import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GripVertical, Plus, X } from "lucide-react";
import React, { useState } from "react";

type Props = {};

let optionsInit = [
  {
    id: "#12345",
    text: "CPU",
    isAnswer: false,
  },
  {
    id: "#12346",
    text: "LRU",
    isAnswer: true,
  },
];

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

export default function ContribMultipleChoice({}: Props) {
  const [options, setOptions] = useState(optionsInit);

  const onAddNewOption = () => {
    setOptions((options) => [
      ...options,
      { id: guidGenerator(), text: "", isAnswer: false },
    ]);
  };

  const onRemoveOption = (id: string) => {
    const updatedList = options.filter((option) => option.id != id);
    setOptions(updatedList);
  };

  return (
    <div className="flex flex-col gap-3 p-5">
      <h4 className="text-md">Add a Question</h4>
      <div className="flex flex-col gap-4 m-5">
        <SimpleInput id="question" label="Question" />
        <Tabs defaultValue="single-correct">
          <div className="flex flex-row-reverse justify-between">
            <TabsList>
              <TabsTrigger value="single-correct">Single Correct</TabsTrigger>
              <TabsTrigger value="multiple-correct">
                Multiple Correct
              </TabsTrigger>
              <TabsTrigger value="numerical">Numerical</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="single-correct">
            <Card>
              <CardHeader>
                <CardDescription>Options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <RadioGroup
                    defaultValue="r1"
                    style={
                      {
                        "--primary": "238.7 83.5% 66.7%",
                        "--ring": "238.7 83.5% 66.7%",
                      } as React.CSSProperties
                    }
                    onValueChange={(e) => console.log(e)}
                  >
                    {options.map((option) => {
                      return (
                        <div className="flex items-center gap-2">
                          <GripVertical size={18} />
                          <div className="border w-9 h-9 hover:bg-accent rounded-lg flex items-center justify-center">
                            <RadioGroupItem value={option.id} id={option.id} />
                          </div>
                          <SimpleInput
                            id="option-1"
                            placeholder="Add text for option"
                            value={option.text}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="gap-2"
                            onClick={(e) => onRemoveOption(option.id)}
                          >
                            <X size={18} />
                          </Button>
                        </div>
                      );
                    })}
                    <div className="flex flex-row pt-4">
                      <div className="flex flex-row"></div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2"
                        onClick={onAddNewOption}
                      >
                        <Plus size={18} /> Add option
                      </Button>
                      <div></div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="multiple-correct">
            <Card>
              <CardHeader>
                <CardDescription>Options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <GripVertical size={18} />
                    <div className="border w-9 h-9 hover:bg-accent rounded-lg flex items-center justify-center">
                      <Checkbox />
                    </div>
                    <SimpleInput id="option-1" placeholder="Option 1" />
                    <Button variant="ghost" size="icon" className="gap-2">
                      <X size={18} />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <GripVertical size={18} />
                    <div className="border w-9 h-9 hover:bg-accent rounded-lg flex items-center justify-center">
                      <Checkbox />
                    </div>
                    <SimpleInput id="option-2" placeholder="Option 2" />
                    <Button variant="ghost" size="icon" className="gap-2">
                      <X size={18} />
                    </Button>
                  </div>
                  <div className="flex flex-row pt-4">
                    <div className="flex flex-row"></div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Plus size={18} /> Add option
                    </Button>
                    <div></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="numerical">
            <div className="max-w-96">
              <SimpleInput id="number-input" label="Answer" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex flex-row-reverse gap-2">
        <Button size="lg">Save</Button>
        <Button size="lg" variant="outline">
          Cancel
        </Button>
      </div>
    </div>
  );
}
