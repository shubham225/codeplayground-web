"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2, LockKeyhole, Mail, MapPinHouse } from "lucide-react";
import SimpleInput from "../custom-ui/input/SimpleInput";
import PassowrdInput from "../custom-ui/input/PasswordInput";
import DateInputField from "../custom-ui/input/DateInputField";

export const signUpFormSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  address: z.string().min(5).max(50),
  state: z.string().min(2),
  dob: z.string(),
});

export default function SignUpForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
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
            message={form.formState.errors.firstname?.message}
            {...form.register("firstname")}
          />

          <SimpleInput
            id="lastname"
            label="Lastname"
            placeholder="ex. Doe"
            message={form.formState.errors.lastname?.message}
            {...form.register("lastname")}
          />
        </div>
        <SimpleInput
          id="email"
          label="Email"
          placeholder="Enter email"
          Icon={Mail}
          message={form.formState.errors.email?.message}
          {...form.register("email")}
        />
        <PassowrdInput
          id="password"
          label="Password"
          placeholder="Enter Password"
          Icon={LockKeyhole}
          message={form.formState.errors.password?.message}
          {...form.register("password")}
        />
        <SimpleInput
          id="address"
          label="Address"
          placeholder="Enter Address"
          Icon={MapPinHouse}
          message={form.formState.errors.address?.message}
          {...form.register("address")}
        />
        <div className="flex justify-between gap-2">
          <SimpleInput
            id="state"
            label="State"
            placeholder="ex. MH"
            message={form.formState.errors.state?.message}
            {...form.register("state")}
          />
          <DateInputField
            id="dob"
            label="Date of Birth"
            message={form.formState.errors.dob?.message}
            {...form.register("dob")}
          />
        </div>
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
