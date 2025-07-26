"use client";

import React, { useActionState, useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { KeyRound, Loader2, Mail, X } from "lucide-react";
import PassowrdInput from "../custom-ui/input/PasswordInput";
import SimpleInput from "../custom-ui/input/SimpleInput";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export const loginFormSchema = z.object({
  email: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const submitAction = async (e: z.infer<typeof loginFormSchema>) => {
    startTransition(async () => {
      const retVal = await signIn("credentials", {
        email: e.email,
        password: e.password,
        redirect: false,
      });

      if (!retVal?.ok) {
        toast.error("Invalid email or password.");
      } else {
        router.push("/");
      }
    });
  };

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitAction)} className="space-y-6">
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
            <Button type="submit" disabled={isPending}>
              {isPending ? (
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
    </div>
  );
}
