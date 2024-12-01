"use client";

import { useParams } from "next/navigation";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const params = useParams();

  return <div>
    Profile Page : <p>{params.profileId}</p>
  </div>;
}
