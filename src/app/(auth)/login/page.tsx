import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <header className="flex flex-col gap-5 md:gap-6 pb-2">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-22 lg:text-30 font-medium text-gray-900 dark:text-gray-100">
            Login to Dashboard
            <p className="text-16 font-normal text-gray-600 dark:text-gray-400">
              Fill the below form to login
            </p>
          </h1>
        </div>
      </header>
      <LoginForm />
      <footer className="flex justify-center gap-1 pt-2">
        <p className="text-14 font-medium text-gray-600 dark:text-gray-400">
          Don't have an account?
        </p>
        <Link href="/signup" className="text-14 cursor-pointer font-medium text-blue-500">
          Sign up
        </Link>
      </footer>
    </>
  );
}
