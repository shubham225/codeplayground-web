"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Mail } from "lucide-react";
import { ReactElement, useState } from "react";

type Props = {
  id: string;
  label: string;
  message?: string | undefined;
  placeholder?: string;
  Icon?: React.ElementType;
};

export default function SimpleInput({
  id,
  label,
  message,
  placeholder,
  Icon,
  ...props
}: Props) {

  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          className={cn("peer pe-5 dark:border-gray-500", {
            "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
              message,
          }, {"ps-9" : Icon})}
          placeholder={placeholder}
          type="text"
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
        </div>
      </div>
      <p
        className="mt-2 text-xs text-destructive"
        role="alert"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
}
