"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type Props = {
  id: string;
  label: string;
  message?: string | undefined;
  placeholder?: string;
};

export default function PassowrdInput({
  id,
  label,
  message,
  placeholder,
  ...props
}: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          className={cn("pe-9 dark:border-gray-500", {
            "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
              message,
          })}
          placeholder={placeholder}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <button
          className={cn(
            "absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            {
              "text-destructive hover:text-destructive":
                message,
            }
          )}
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
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
