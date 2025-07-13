import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";
import { CircleCheckBig, Clock } from "lucide-react";
import { capitalizeFirstLetterOfEachWord, cn } from "@/lib/utils";
import { Problem } from "@/types";
import { Badge } from "@/components/ui/badge";
import Chip from "../custom-ui/chip";
import { getVariantForDifficulty, getVariantForStatus } from "@/lib/utils/get-variant";

type Props = { problem: Problem };

const ProblemDescription = ({ problem, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <div className="p-2 px-4 h-full">
      <div className="flex flex-col h-full overflow-auto">
        <h1 className="text-lg font-semibold">{problem.title}</h1>
        <div className="flex gap-2 py-2">
          <Chip
            variant={getVariantForDifficulty(problem.difficulty)}
          >
            {capitalizeFirstLetterOfEachWord(problem.difficulty)}</Chip>
          
          <Chip
            variant={getVariantForStatus(problem.status)}
            className="flex gap-1"
          >
            {capitalizeFirstLetterOfEachWord(problem.status)}</Chip>
          
        </div>
        <MarkdownPreview
          wrapperElement={
            theme === "light"
              ? { "data-color-mode": "light" }
              : { "data-color-mode": "dark" }
          }
          source={problem.descriptionMd}
          className="h-[calc(100vh_-_250px)]"
          style={{ background: "transparent" }}
        />
      </div>
    </div>
  );
};

export default ProblemDescription;
