"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { capitalizeFirstLetterOfEachWord, cn } from "@/lib/utils";
import { ProblemSummery } from "@/types";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Edit2, Ellipsis, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<ProblemSummery>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   size: 28,
  //   enableSorting: false,
  // },
  {
    header: "Title",
    accessorKey: "title",
    size: 200,
  },
  {
    header: "Difficulty",
    accessorKey: "difficulty",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("difficulty") === "Hard" &&
            "bg-muted-foreground/60 text-primary-foreground"
        )}
      >
        {row.getValue("difficulty")}
      </Badge>
    ),
    size: 120,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <div className="font-medium">
        {capitalizeFirstLetterOfEachWord(row.getValue("status"))}
      </div>
    ),
    size: 180,
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              console.log("Edit CLicked");
            }}
          >
            <Edit2 size={15} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              console.log("Delete CLicked");
            }}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      );
    },
    size: 60,
    enableHiding: false,
  },
];
