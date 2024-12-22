import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";
import { CircleCheckBig, Clock } from "lucide-react";
import { capitalizeFirstLetterOfEachWord, cn } from "@/lib/utils";
import { Problem } from "@/types";
import { Badge } from "@/components/ui/badge";

type Props = { problem: Problem };

const ProblemDescription = ({ problem, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <div className="p-2 px-4 h-full">
      <div className="flex flex-col h-full overflow-auto">
        <h1 className="text-lg font-semibold">{problem.title}</h1>
        <div className="flex gap-2 py-2">
          <Badge
            variant="secondary"
            className={cn("font-normal", {
              "text-teal-400": problem.difficulty === "EASY",
              "text-orange-400": problem.difficulty === "MEDIUM",
              "text-red-500": problem.difficulty === "HARD",
            })}
          >
            {capitalizeFirstLetterOfEachWord(problem.difficulty)}
          </Badge>
          <Badge
            variant="secondary"
            className={cn("font-normal", {
              "text-blue-400": problem.status === "OPEN",
              "text-teal-400": problem.status === "SOLVED",
              "text-orange-400": problem.status === "PENDING",
            })}
          >
            {problem.status === "SOLVED" && <CircleCheckBig className="p-1" />}
            {problem.status === "PENDING" && <Clock className="p-1" />}
            {capitalizeFirstLetterOfEachWord(problem.status)}
          </Badge>
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
