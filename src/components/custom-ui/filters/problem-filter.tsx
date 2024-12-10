import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";

const items = [
  { id: "checkbox-18-c1", value: "c1", label: "Algorithms", defaultChecked: true },
  { id: "checkbox-18-c3", value: "c3", label: "Subjective" },
  { id: "checkbox-18-c4", value: "c4", label: "MCQ", defaultChecked: true },
  { id: "checkbox-18-c6", value: "c6", label: "Database", disabled: true },
];
type Props = {}

export default function ProblemFilter({}: Props) {
  return (
      <div className="flex gap-1.5">
        {items.map((item) => (
          <label
            key={item.id}
            className="relative flex cursor-pointer flex-col items-center justify-center gap-3 px-3 py-2 h-8 rounded-full border border-input text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
          >
            <Checkbox
              id={item.id}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
            />
            <span className='text-sm'>{item.label}</span>
          </label>
        ))}
      </div>
  );
}


