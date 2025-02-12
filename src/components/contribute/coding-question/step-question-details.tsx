"use client";

import InputTags from "@/components/custom-ui/input-tag";
import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useTheme } from "next-themes";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { Button } from "@/components/ui/button";
import { FaMarkdown } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Description } from "@radix-ui/react-toast";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
};

const mdStr =
  "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.\n\n#### Example 1:\n> **Input:** nums = [2,7,11,15], target = 9\n>\n> **Output:** [0,1]\n>\n> **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].\n\n#### Example 2:\n> **Input:** nums = [3,2,4], target = 6\n>\n> **Output:** [1,2]\n\n#### Constraints:\n + `2 <= nums.length <= 104`\n + `-109 <= nums[i] <= 109`\n + `-109 <= target <= 109`\n";

export default function QuestionDetails({ setStep, data, setData }: Props) {
  const [markdown, setMarkdown] = useState(mdStr);
  const [summery, setSummery] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const { theme } = useTheme();

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
        <SimpleInput
          id="question"
          label="Question Summery"
          placeholder="Write short summery of a question"
          value={summery}
          onChange={(e) => {
            e.preventDefault();
            setSummery(e.target.value);
          }}
        />
        <div className="flex gap-3">
          <div className="space-y-2 w-full">
            <Label htmlFor="difficulty">Difficulty</Label>
            <SelectNative
              id="difficulty"
              value={difficulty}
              onChange={(e) => {
                e.preventDefault();
                setDifficulty(e.target.value);
              }}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </SelectNative>
          </div>
          <InputTags />
        </div>
        <div className="space-y-3 pt-3" data-color-mode={theme}>
          <div className="flex gap-2">
            <Label>Problem Description</Label>
            <FaMarkdown />
          </div>
          <MarkdownEditor
            value={markdown}
            height="450px"
            onChange={(value, viewUpdate) => setMarkdown(value)}
            theme={theme === "light" ? vscodeLight : vscodeDark}
          />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setData((data: any) => ({
              ...data,
              summery: summery,
              difficulty: difficulty,
              description: markdown,
            }));
            setStep("step-2");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
