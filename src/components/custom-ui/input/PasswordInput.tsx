"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, SquareAsterisk } from "lucide-react";
import { useState } from "react";

type Props = {
  id: string;
  label: string;
  message?: string | undefined;
  placeholder?: string;
  Icon?: React.ElementType;
};

export default function PassowrdInput({
  id,
  label,
  message,
  placeholder,
  Icon,
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
          },{"ps-9" : Icon})}
          placeholder={placeholder}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
        </div>
        <button
          className={cn(
            "absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            {
              "text-destructive hover:text-destructive": message,
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
