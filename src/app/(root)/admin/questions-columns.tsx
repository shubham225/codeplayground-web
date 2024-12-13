"use client";

import { Button } from "@/components/ui/button";
import { capitalizeFirstLetterOfEachWord } from "@/lib/utils";
import { ProblemSummery } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<ProblemSummery>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return capitalizeFirstLetterOfEachWord(row.original.status);
    },
  },
  {
    accessorKey: "title",
    header: "Title",
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
        <div className="flex gap-2">
          <Button
            variant="outline"
            aria-label="Login with Google"
            size="icon"
            onClick={() => {
              console.log("Edit CLicked");
            }}
          >
            <Edit2 size={16} aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            aria-label="Login with Google"
            size="icon"
            onClick={() => {
              console.log("Delete CLicked");
            }}
          >
            <Trash2 size={16} aria-hidden="true" />
          </Button>
        </div>
      );
    },
  },
];
