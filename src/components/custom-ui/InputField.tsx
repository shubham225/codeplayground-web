import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { InputFieldProps } from "@/types";
import PassowrdInput from "./input/PasswordInput";

export default function InputFormField({
  control,
  name,
  label,
  placeholder,
  type = "text",
  children,
  ...props
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <FormLabel className="text-14 w-full max-w-[280px] font-medium pl-1 text-gray-700">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder}
                type={type}
                className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500"
                {...field}
                {...props}
              />
            </FormControl>
            <FormMessage className="text-12 text-red-500 mt-2" />
          </div>
        </div>
      )}
    />
  );
}
