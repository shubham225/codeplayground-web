"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "../custom-ui/InputField";
import { Loader2 } from "lucide-react";

export const signUpFormSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  address: z.string().max(50),
  state: z.string().min(2),
  postalCode: z.string().max(6),
  dob: z.string().length(10),
  username: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function SignUpForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    // Do something with the form values.
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between gap-2">
          <InputField
            control={form.control}
            name="firstname"
            label="Firstname"
            placeholder="ex. John"
          />
          <InputField
            control={form.control}
            name="lastname"
            label="Lastname"
            placeholder="ex. Doe"
          />
        </div>
        <InputField
          control={form.control}
          name="address"
          label="Address"
          placeholder="Enter your address"
        />
        <div className="flex justify-between gap-2">
          <InputField
            control={form.control}
            name="state"
            label="State"
            placeholder="ex. MH"
          />
          <InputField
            control={form.control}
            name="postalCode"
            label="Postal Code"
            placeholder="ex. 123456"
          />
        </div>
        <div className="flex justify-between gap-2">
          <InputField
            control={form.control}
            name="username"
            label="Email"
            placeholder="Enter your email"
          />
          <InputField
            control={form.control}
            name="dob"
            label="Date of Birth"
            placeholder="DD-MM-YYYY"
          />
        </div>
        <InputField
          control={form.control}
          name="password"
          label="Password"
          placeholder="Create a password"
          type="password"
        />
        <div className="flex flex-col gap-2">
          <Button type="submit" className="form-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="loader" /> Loading...{" "}
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
