"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "../data-tables";
import { columns } from "./result-columns";
import { Problem, Submission } from "@/types";
import { fetchAllSubmissions } from "@/services/problemService";

type Props = { problem: Problem };

const ProblemResult = ({ problem, ...props }: Props) => {
  const [data, setData] = useState<Submission[] | []>([]);

  useEffect(() => {
    const fetchAllSubmissionsAsync = async () => {
      const response = await fetchAllSubmissions(problem.id);
      setData(response);
    };

    fetchAllSubmissionsAsync();
  }, [problem]);

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ProblemResult;
