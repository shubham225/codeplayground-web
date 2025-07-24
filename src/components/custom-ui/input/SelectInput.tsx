import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { cn } from "@/lib/utils";
import React from "react";

type SelectOptions = {
  id: string;
  text: string;
};

type Props = {
  id: string;
  label?: string;
  message?: string | undefined;
  placeholder?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  options?: SelectOptions[];
};

export default function SelectInput({
  id,
  label,
  message,
  options,
  ...props
}: Props) {
  return (
    <div className="space-y-1 w-full">
      <Label htmlFor={id}>Difficulty</Label>
        <SelectNative
          id={id}
          className={cn("peer pe-5 dark:border-gray-500", {
            "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
              message,
          })}
          {...props}
        >
          {options?.map((option) => (
            <option key={option.id} value={option.id}>{option.text}</option>
          ))}
        </SelectNative>
        <p
          className=" text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          {message}
        </p>
    </div>
  );
}
