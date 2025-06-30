import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function LoginButton() {
  return (
    <div className="flex gap-2">
      <Link href={"/login"}>
        <Button size="sm" variant="link">
          Login
        </Button>
      </Link>
      <Link href={"/signup"}>
        <Button size="sm" className="px-6 py-2">
          Sign up
        </Button>
      </Link>
    </div>
  );
}
