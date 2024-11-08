"use client";

import { Button } from "@/components/ui/button";
import { capitalizeFirstLetterOfEachWord } from "@/lib/utils";
import { ProblemSummery } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<ProblemSummery>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {return capitalizeFirstLetterOfEachWord(row.original.status)}
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    cell: ({row}) => {return capitalizeFirstLetterOfEachWord(row.original.difficulty)}
  },
  {
    accessorKey: "solve",
    header: "Solve",
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          variant="default"
          size="sm"
          onClick={() => {
            router.push(`problems/${row.original.id}`);
          }}
        >
          Solve
        </Button>
      );
    },
  },
];
