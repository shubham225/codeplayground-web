"use client";

import LoginForm from "@/components/forms/login-form";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleLoginWithGoogle = (e: React.MouseEvent<HTMLElement>) => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  const handleLoginWithGitHub = (e: React.MouseEvent<HTMLElement>) => {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <div className="flex flex-col gap-3 p-12 rounded-lg md:bg-card md:shadow-md md:border">
      <header className="flex flex-col gap-2 items-center">
        <span className="font-bold text-3xl leading-tight mr-1">
          <span className="">{"{"}</span>
          <span className="text-orange-500">{" }"}</span>
        </span>
        <h1 className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-gray-100">
          Login to Account
        </h1>
        <p className="text-xs font-light text-muted-foreground">
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
          size="default"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle size={25} />
          Sign in with Google
        </Button>
        <Button
          className="flex gap-2"
          variant="outline"
          size="default"
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
        {" "}
        <Link
          href="/signup"
          className="text-14 cursor-pointer font-medium hover:underline text-blue-500"
        >
          Sign up
        </Link>
      </footer>
    </div>
  );
}
