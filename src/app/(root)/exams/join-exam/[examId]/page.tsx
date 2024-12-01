"use client";

import { useParams } from "next/navigation";
import React from "react";

type Props = {};

export default function Examination({}: Props) {
  const params = useParams();

  return <div>Examination Started : <p>{params.examId}</p></div>;
}
