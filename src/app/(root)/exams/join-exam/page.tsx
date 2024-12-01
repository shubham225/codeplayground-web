"use client";

import { JoinExam } from "@/components/dialogs/join-exam";
import React, { useEffect, useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return;

  return <JoinExam />;
}
