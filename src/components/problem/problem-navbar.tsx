import React from "react";

type Props = {};

export default function ProblemNavbar({}: Props) {
  return (
    <div className="flex justify-center items-center border rounded-md px-4 gap-2">
      <p className="text-accent-foreground font-bold">00</p>
      <p className="text-muted-foreground">:</p>
      <p className="text-accent-foreground font-bold">29</p>
      <p className="text-muted-foreground">:</p>
      <p className="text-accent-foreground font-bold">59</p>
    </div>
  );
}
