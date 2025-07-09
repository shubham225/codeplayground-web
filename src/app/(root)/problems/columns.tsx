"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { capitalizeFirstLetterOfEachWord, cn } from "@/lib/utils";
import { ProblemSummery } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Bookmark, Play } from "lucide-react";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<ProblemSummery>[] = [
  {
    accessorKey: "name",
    header: "Problem",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <h1 className="text-normal font-semibold">{row.original.title}</h1>
          <h5 className="text-xm text-muted-foreground font-light">
            {row.original.summery}
          </h5>
        </div>
      );
    },
    minSize: 200,
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    cell: ({ row }) => {
      return (
        <Badge
          className={cn(
            row.original.difficulty === "EASY" &&
              "text-green-600 bg-green-100 hover:bg-green-100/80",
            row.original.difficulty === "HARD" &&
              "text-red-600 bg-red-100 hover:bg-red-100/80"
          )}
        >
          {capitalizeFirstLetterOfEachWord(row.original.difficulty)}
        </Badge>
      );
    },
    size: 30,
    minSize: 30,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge
          className={cn(
            row.original.status === "PENDING" &&
              "text-blue-600 bg-blue-100 hover:bg-blue-100/80",
            row.original.status === "OPEN" &&
              "text-orange-600 bg-orange-100 hover:bg-orange-100/80",
            row.original.status === "SOLVED" &&
              "text-green-600 bg-green-100 hover:bg-green-100/80"
          )}
        >
          {capitalizeFirstLetterOfEachWord(row.original.status)}
        </Badge>
      );
    },
    size: 30,
    minSize: 30,
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <div className="flex gap-2 justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              router.push(`problems/${row.original.id}`);
            }}
          >
            <div className="flex gap-2 items-center justify-center">
              <Play />
            </div>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              // TODO: Implememtation
              console.log("bookmark clicked!!!");
            }}
          >
            <div className="flex gap-2 items-center justify-center">
              <Bookmark />
            </div>
          </Button>
        </div>
      );
    },
    size: 30,
    minSize: 30,
  },
];
