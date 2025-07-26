"use client";

import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { ProblemSummery } from "@/types";
import { fetchAllProblems } from "@/services/problemService";
import { DataTable } from "@/components/custom-ui/datatable";

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
    <main className="p-5">
      <div className="h-full flex flex-col gap-2">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default problems;
