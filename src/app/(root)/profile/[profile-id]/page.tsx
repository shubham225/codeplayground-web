"use client";

import { useParams } from "next/navigation";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const params = useParams();

  console.log(params);

  return <div>
    Profile Page 
  </div>;
}
