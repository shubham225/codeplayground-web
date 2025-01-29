"use client";

import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { ProblemSummery } from "@/types";
import { fetchAllProblems } from "@/services/problemService";
import PageHeader from "@/components/page-header";
import ProblemFilter from "@/components/custom-ui/filters/problem-filter";
import MyDataTable from "@/components/custom-ui/table/datatable";
import TableWithFilter from "@/components/custom-ui/table/table-with-filter";
import { DataTable } from "@/components/data-tables";

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
      console.log("Fetched ", response);
      setData(response);
    };

    fetchAllProblemStatements();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="p-5">
      <PageHeader
        title="Practice"
        subtitle="Browse and solve coding problems to boost your skills!"
      />
      <div className="h-full flex flex-col gap-2">
        <div className="flex flex-row-reverse m-2">
          <ProblemFilter />
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default problems;
