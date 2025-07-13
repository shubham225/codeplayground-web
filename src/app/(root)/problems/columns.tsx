"use client";

import Chip from "@/components/custom-ui/chip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { capitalizeFirstLetterOfEachWord, cn } from "@/lib/utils";
import { getVariantForDifficulty, getVariantForStatus } from "@/lib/utils/get-variant";
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
        <Chip
          variant={getVariantForDifficulty(row.original.difficulty)}
        >
          {capitalizeFirstLetterOfEachWord(row.original.difficulty)}
        </Chip>
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
        <Chip
          variant={getVariantForStatus(row.original.status)}
        >
          {capitalizeFirstLetterOfEachWord(row.original.status)}
        </Chip>
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
