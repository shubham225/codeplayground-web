import { Braces, BracesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href={"/"}>
        <div className="flex font-bold text-left">
          <span className="text-teal-500 text-2xl md:text-2xl leading-tight mr-1">
            {"{ }"}
          </span>
          <div className="text-blue-600 hidden sm:flex sm:flex-col text-xl leading-none">
            Code
            <span className="block text-orange-400 text-sm leading-none ">
              Playground
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
