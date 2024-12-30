import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ButtonWithIcon() {
  return (
    <Button className="aspect-square max-sm:p-0">
      <Plus
        className="opacity-90 sm:-ms-1 sm:me-2"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="max-sm:sr-only">Add new</span>
    </Button>
  );
}
