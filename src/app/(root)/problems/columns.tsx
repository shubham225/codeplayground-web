"use client";

import { Button } from "@/components/ui/button";
import { capitalizeFirstLetterOfEachWord } from "@/lib/utils";
import { ProblemSummery } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<ProblemSummery>[] = [
  {
    accessorKey: "id",
    header: "# ID",
    cell: ({ row }) => {
      return (
        <span>
          {" "}
          #{capitalizeFirstLetterOfEachWord(row.original.id).substring(0, 6)}
        </span>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return capitalizeFirstLetterOfEachWord(row.original.status);
    },
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    cell: ({ row }) => {
      return capitalizeFirstLetterOfEachWord(row.original.difficulty);
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            router.push(`problems/${row.original.id}`);
          }}
        >
          <div className="flex gap-2 items-center justify-center">

          Solve
          <Play />
          </div>
        </Button>
      );
    },
  },
];
