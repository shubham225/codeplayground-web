"use client";

import LoginForm from "@/components/forms/login-form";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  const handleLoginWithGoogle = (e: React.MouseEvent<HTMLElement>) => {
    console.log("Loggin in with Google..");
  };

  const handleLoginWithGitHub = (e: React.MouseEvent<HTMLElement>) => {
    console.log("Loggin in with GitHub..");
  };

  return (
    <div className="flex flex-col gap-3">
      <header className="flex flex-col gap-2 md:gap-2">
        <h1 className="text-22 lg:text-30 text-24 font-medium text-gray-900 dark:text-gray-100">
          Login to your account
        </h1>
        <p className="text-sm font-medium text-muted-foreground">
          Fill the below form to login
        </p>
      </header>

      <LoginForm />

      <div className="flex justify-center items-center gap-4 overflow-hidden">
        <Separator />
        <Label className="font-medium">OR</Label>
        <Separator />
      </div>

      <div className="flex justify-evenly my-4">
        <Button
          className="flex gap-2"
          variant="outline"
          size="lg"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle size={25} />
          Sign in with Google
        </Button>
        <Button
          className="flex gap-2"
          variant="outline"
          size="lg"
          onClick={handleLoginWithGitHub}
        >
          <FaGithub size={25} />
          Sign in with Github
        </Button>
      </div>

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-medium text-gray-600 dark:text-gray-400">
          Don't have an account?
        </p>
        <Link
          href="/signup"
          className="text-14 cursor-pointer font-medium text-blue-500"
        >
          Sign up
        </Link>
      </footer>
    </div>
  );
}
