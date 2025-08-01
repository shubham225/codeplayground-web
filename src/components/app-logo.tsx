import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href={"/"}>
        <div className="flex font-bold text-left items-center">
          <span className="text-teal-500 text-3xl leading-tight mr-1">
            {"{ }"}
          </span>
          <div className="hidden sm:flex sm:flex-col text-lg leading-none font-mono">
            Code
            <span className="block text-orange-400 text-xs leading-none font-sans font-medium">
              Playground<span className="animate-blink">_</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
