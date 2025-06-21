"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { KeyRound, Loader2, Mail } from "lucide-react";
import PassowrdInput from "../custom-ui/input/PasswordInput";
import SimpleInput from "../custom-ui/input/SimpleInput";

export const loginFormSchema = z.object({
  email: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default async function LoginForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <SimpleInput
          id="email"
          label="Email"
          placeholder="Enter email address"
          Icon={Mail}
          message={form.formState.errors.email?.message}
          {...form.register("email")}
        />
        <PassowrdInput
          id="password"
          label="Password"
          placeholder="Enter Password"
          Icon={KeyRound}
          message={form.formState.errors.password?.message}
          {...form.register("password")}
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
