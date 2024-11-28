import SignUpForm from "@/components/forms/SignUpForm";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <>
      <header className="flex flex-col gap-5 md:gap-6 pb-2">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-22 lg:text-30 text-24 font-medium text-gray-900 dark:text-gray-100">
            Create account
            <p className="text-16 font-normal text-gray-600 dark:text-gray-300">
              Enter your details to get started.
            </p>
          </h1>
        </div>
      </header>
      <SignUpForm />
      <footer className="flex justify-center gap-1 pt-2">
        <p className="text-14 font-normal text-gray-600 dark:text-gray-400">
          Already have an account?
        </p>
        <Link href="/login" className="text-14 cursor-pointer font-medium text-blue-500">
          Log in
        </Link>
      </footer>
    </>
  );
}
