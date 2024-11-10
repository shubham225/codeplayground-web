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
    const fetchSubmissionsByUserProblemIdAsync = async () => {
      let submissions = problem.submissions;
  
      if (problem.userProblemId) {
        try{
          const response = await fetchAllSubmissions(problem.userProblemId);
          submissions = response;
        } catch(error) {
          console.log("Error occured: ",error)
        }
      }
  
      setData(submissions);
    }

    fetchSubmissionsByUserProblemIdAsync();
  }, [problem]);

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ProblemResult;
