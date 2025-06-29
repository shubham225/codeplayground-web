import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export default function LoginButton() {
  return (
    <Link href={"/login"}>
      <Button
        size="sm"
        className="group relative flex items-center gap-2 rounded-lg border border-input bg-primary px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <LogIn
          size={16}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Login
      </Button>
    </Link>
  );
}
