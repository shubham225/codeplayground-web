"use client";

import SignUpForm from "@/components/forms/signup-form";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-3 p-12 rounded-lg md:bg-card md:shadow-md md:border">
      <header className="flex flex-col gap-2 items-center">
        <span className="font-bold text-3xl leading-tight mr-1 h-14 w-14 flex justify-center bg-slate-50 border shadow-sm p-2 rounded-xl">
          <div className="">
            <span className="">{"{"}</span>
            <span className="text-orange-500">{" }"}</span>
          </div>
        </span>
        <h1 className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-gray-100">
          Create an Account
        </h1>
        <p className="text-xs font-light text-muted-foreground">
          Enter your details to get started.
        </p>
      </header>

      <SignUpForm />

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600 dark:text-gray-400">
          Already have an account?
        </p>{" "}
        <Link
          href="/login"
          className="text-14 cursor-pointer font-medium hover:underline text-blue-500"
        >
          Log in
        </Link>
      </footer>
    </div>
  );
}
