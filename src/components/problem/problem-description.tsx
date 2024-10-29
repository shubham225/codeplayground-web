import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";
import { Badge } from "../ui/badge";
import { CircleCheckBig, Clock } from "lucide-react";
import { capitalizeFirstLetterOfEachWord, cn } from "@/lib/utils";
import { Problem } from "@/types";

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
              "text-teal-400": problem.difficulty === "easy",
              "text-orange-400": problem.difficulty === "medium",
              "text-red-500": problem.difficulty === "hard",
            })}
          >
            {capitalizeFirstLetterOfEachWord(problem.difficulty)}
          </Badge>
          <Badge
            variant="secondary"
            className={cn("font-normal", {
              "text-blue-400": problem.status === "open",
              "text-teal-400": problem.status === "solved",
              "text-orange-400": problem.status === "pending",
            })}
          >
            {problem.status === "solved" && <CircleCheckBig className="p-1" />}
            {problem.status === "pending" && <Clock className="p-1" />}
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
