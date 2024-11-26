"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "../custom-ui/InputField";
import { Loader2 } from "lucide-react";

export const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          control={form.control}
          name="username"
          label="Email"
          placeholder="Enter your email"
        />
        <InputField
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex flex-col gap-3 pt-2">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Loading...{" "}
              </>
            ) : (
              <>Sign In</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
