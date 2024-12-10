"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/data-tables";
import { columns } from "./columns";
import { ProblemSummery } from "@/types";
import { fetchAllProblems } from "@/services/problemService";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProblemFilter from "@/components/custom-ui/filters/problem-filter";

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
    <main>
      <PageHeader
        title="Practice"
        subtitle="Browse and solve coding problems to boost your skills!"
      />
      <div className="mt-14 h-full">
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-between">
              <h1 className="text-xl">Select Problem</h1>
              <ProblemFilter />
            </div>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default problems;
