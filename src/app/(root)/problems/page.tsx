"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/data-tables";
import { columns } from "./columns";
import { ProblemSummery } from "@/types";
import { fetchAllProblems } from "@/services/problemService";

type Props = {};

const problems = (props: Props) => {
  const [data, setData] = useState<ProblemSummery[] | []>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchAllProblemStatements = async () => {
      const response = await fetchAllProblems();
      setData(response);
    };

    fetchAllProblemStatements();
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <main className="size-full p-2">
      <DataTable columns={columns} data={data} />
    </main>
  );
};

export default problems;
