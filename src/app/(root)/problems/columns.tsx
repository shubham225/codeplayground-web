"use client";

import { Button } from "@/components/ui/button";
import { ProblemSummery } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<ProblemSummery>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
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
            router.push(`problems/${row.original.urlCode}`);
          }}
        >
          Solve
        </Button>
      );
    },
  },
];
