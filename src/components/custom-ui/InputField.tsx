import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { InputFieldProps } from "@/types";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";



export default function InputField({
  control,
  name,
  label,
  placeholder,
  type = "text",
  ...props
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder}
                type={type}
                className="input-class"
                {...field}
                {...props}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
}
