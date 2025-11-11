"use client";

import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import React, { useMemo, useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useTheme } from "next-themes";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { Button } from "@/components/ui/button";
import { FaMarkdown } from "react-icons/fa";
import { Tag } from "emblor";
import Link from "next/link";
import * as z from "zod";
import { cn } from "@/lib/utils";
import SelectInput from "@/components/custom-ui/input/SelectInput";
import InputTags from "@/components/custom-ui/input/input-tag";

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

const TagSchema = z.object({
  id: z.string(),
  text: z.string(),
});

const questionDetailsData = z.object({
  title: z.string().min(3),
  difficulty: z.string(),
  tags: z.array(TagSchema).min(1),
  descriptionMd: z.string().min(10),
});

const selectOptions = [
  {
    id: "EASY",
    text: "Easy",
  },
  {
    id: "MEDIUM",
    text: "Medium",
  },
  {
    id: "HARD",
    text: "Hard",
  },
];

export default function QuestionDetails({ setStep, data, setData }: Props) {
  const [markdown, setMarkdown] = useState(data.descriptionMd);
  const [title, setTitle] = useState(data.title);
  const [difficulty, setDifficulty] = useState(data.difficulty || "EASY");
  const [errors, setErrors] = useState<any>({});
  const [tags, setTags] = useState<Tag[]>(tagsList);
  const { theme } = useTheme();

  const resetError = (fieldName: string) => {
    setErrors((errors: any) => {
      const { [fieldName]: _, ...rest } = errors;
      return rest;
    });
  };

  const handleSetData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const step1Data = {
        title: title,
        difficulty: difficulty,
        descriptionMd: markdown,
        tags: tags,
      };

      questionDetailsData.parse(step1Data);

      setData((data: any) => ({
        ...data,
        ...step1Data,
      }));

      setStep("step-2");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten()?.fieldErrors);
      }
    }
  };

  return (
    <div className="p-3 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
        {/* Question Summery */}
        <SimpleInput
          id="question"
          label="Question Summery"
          placeholder="Write short summery of a question"
          value={title}
          message={errors?.title}
          onChange={(e) => {
            e.preventDefault();
            setTitle(e.target.value);
            resetError("title");
          }}
        />

        <div className="flex gap-2">
          {/* Difficulty Input */}
          <SelectInput
            id="difficulty"
            value={difficulty}
            message={errors?.difficulty}
            options={selectOptions}
            onChange={(e) => {
              e.preventDefault();
              setDifficulty(e.target.value);
              resetError("difficulty");
            }}
          />
          {/* Tags Input */}
          <InputTags
            tags={tags}
            setTags={(tag) => {
              setTags(tag);
              resetError("tags");
            }}
            message={errors?.tags}
          />
        </div>
        <div className="space-y-1 pt-2" data-color-mode={theme}>
          <div className="flex gap-2">
            <Label>Problem Description</Label>
            <FaMarkdown />
          </div>
          <MarkdownEditor
            value={markdown}
            className={cn(
              "border border-input rounded-lg bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 p-1 gap-1",
              {
                "border border-destructive/80 text-destructive focus-within:border-destructive/80 focus-within:ring-destructive/20 focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
                  errors?.descriptionMd,
              }
            )}
            height="450px"
            onChange={(value, viewUpdate) => {
              setMarkdown(value);
              resetError("descriptionMd");
            }}
            theme={theme === "light" ? vscodeLight : vscodeDark}
          />
          <p
            className="text-xs text-destructive"
            role="alert"
            aria-live="polite"
          >
            {errors?.descriptionMd}
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2">
        <Button onClick={handleSetData}>Next</Button>
        <Link href={"/contribute-question"}>
          <Button variant={"outline"}>Cancel</Button>
        </Link>
      </div>
    </div>
  );
}
