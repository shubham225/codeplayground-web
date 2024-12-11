import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, TrendingUpDown } from "lucide-react";

const items = [
  {
    id: "checkbox-18-c1",
    value: "c1",
    label: "Algorithms",
    defaultChecked: true,
  },
  { id: "checkbox-18-c3", value: "c3", label: "Subjective" },
  { id: "checkbox-18-c4", value: "c4", label: "MCQ", defaultChecked: true },
  { id: "checkbox-18-c6", value: "c6", label: "Database", disabled: true },
];
type Props = {};

export default function ProblemFilter({}: Props) {
  return (
    <div className="flex gap-2 p-2 border rounded-md items-baseline">
      <div className="flex gap-1 items-center pr-3 font-semibold text-muted-foreground">
        <Filter size={18} /> <h6 className="text-md">Filter</h6>
      </div>
      {items.map((item) => (
        <label
          key={item.id}
          className="relative flex cursor-pointer items-center justify-center gap-3 px-3 py-2 h-8 rounded-md border border-input text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
        >
          <Checkbox
            id={item.id}
            value={item.value}
            className="sr-only after:absolute after:inset-0"
            defaultChecked={item.defaultChecked}
            disabled={item.disabled}
          />
          <TrendingUpDown size={18} />
          <span className="text-sm">{item.label}</span>
        </label>
      ))}
    </div>
  );
}
