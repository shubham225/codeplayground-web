"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputFormField from "../custom-ui/InputField";
import { Loader2 } from "lucide-react";
import SimpleInput from "../custom-ui/input/SimpleInput";
import PassowrdInput from "../custom-ui/input/PasswordInput";
import DateInputField from "../custom-ui/input/DateInputField";

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
          <SimpleInput
            id="firstname"
            label="Firstname"
            placeholder="ex. John"
            {...form.register("firstname")}
          />

          <SimpleInput
            id="lastname"
            label="Lastname"
            placeholder="ex. Doe"
            {...form.register("lastname")}
          />
        </div>
        <SimpleInput
          id="address"
          label="Address"
          placeholder="Enter Address"
          {...form.register("address")}
        />
        <div className="flex justify-between gap-2">
          <SimpleInput
            id="state"
            label="State"
            placeholder="ex. MH"
            {...form.register("state")}
          />
          <SimpleInput
            id="postalCode"
            label="Postal Code"
            placeholder="ex. 123456"
            {...form.register("postalCode")}
          />
        </div>
        <div className="flex justify-between gap-2">
          <SimpleInput
            id="username"
            label="Email"
            placeholder="Enter email"
            {...form.register("username")}
          />
          <SimpleInput
            id="dob"
            label="Date of Birth"
            placeholder="DD-MM-YYYY"
            {...form.register("dob")}
          />
        </div>
        <PassowrdInput
          id="password"
          label="Password"
          message={form.formState.errors.password?.message}
          placeholder="Enter Password"
          {...form.register("password")}
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
