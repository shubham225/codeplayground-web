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
import { Tag } from "emblor";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
};

const tagsList = [
  {
    id: "1",
    text: "Java",
  },
];

export default function QuestionDetails({ setStep, data, setData }: Props) {
  const [markdown, setMarkdown] = useState(data.description);
  const [summery, setSummery] = useState(data.summery);
  const [difficulty, setDifficulty] = useState(data.difficulty);
  const [tags, setTags] = useState<Tag[]>(tagsList);
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
          <InputTags tags={tags} setTags={setTags} />
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
              tags: tags,
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
