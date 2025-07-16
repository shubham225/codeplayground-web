import Image from "next/image";
import React from "react";

type Props = {};

export default function ContributeDatabase({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src={"/imgs/caveman-404.gif"}
        alt="not-found"
        width={900}
        height={400}
      />
      <h1 className="text-lg font-semibold text-accent-foreground">
        Page Under Construction...
      </h1>
    </div>
  );
}
