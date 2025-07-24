"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { LanguagesIcon, SwatchBook } from "lucide-react";
import React, { useState } from "react";
import {
  COriginal,
  JavaOriginal,
  CplusplusOriginal,
  JavascriptOriginal,
  PythonOriginal,
  GoOriginal,
  RustOriginal,
  KotlinOriginal,
  MariadbOriginalWordmark,
  MongodbOriginalWordmark,
  MysqlOriginal,
} from "devicons-react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
};

const languages = [
  {
    id: "#125",
    label: "C",
    icon: COriginal,
    selected: false,
  },
  {
    id: "#134",
    label: "C++",
    icon: CplusplusOriginal,
    selected: false,
  },
  {
    id: "#132",
    label: "C++ 11",
    icon: CplusplusOriginal,
    selected: false,
  },
  // {
  //   id: "#124",
  //   label: "C++ 20",
  //   icon: CplusplusOriginal,
  //   selected: false,
  // },
  {
    id: "#123",
    label: "Java",
    icon: JavaOriginal,
    selected: false,
  },
  {
    id: "#133",
    label: "Java 8",
    icon: JavaOriginal,
    selected: false,
  },
  // {
  //   id: "#135",
  //   label: "Java 20",
  //   icon: JavaOriginal,
  //   selected: false,
  // },
  {
    id: "#126",
    label: "Javascript",
    icon: JavascriptOriginal,
    selected: false,
  },
  {
    id: "#127",
    label: "Python",
    icon: PythonOriginal,
    selected: false,
  },
  {
    id: "#128",
    label: "Go",
    icon: GoOriginal,
    selected: false,
  },
  {
    id: "#129",
    label: "Rust",
    icon: RustOriginal,
    selected: false,
  },
  {
    id: "#120",
    label: "Kotlin",
    icon: KotlinOriginal,
    selected: false,
  },
  // {
  //   id: "#137",
  //   label: "MySQL",
  //   icon: MysqlOriginal,
  //   selected: false,
  // },
  // {
  //   id: "#138",
  //   label: "MariaDB",
  //   icon: MariadbOriginalWordmark,
  //   selected: false,
  // },
  // {
  //   id: "#140",
  //   label: "MongoDB",
  //   icon: MongodbOriginalWordmark,
  //   selected: false,
  // },
];

export default function LanguagesDetails({ setStep, data, setData }: Props) {
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);

  return (
    <div className="p-5 flex flex-col justify-between gap-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Languages</h1>
        <h4 className="text-md text-muted-foreground">
          Candidates will have option to solve problems in selected languages
        </h4>
        <div className="flex flex-col gap-3 pt-6">
          <h2 className="text-lg">Select Languages</h2>
          <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-4">
            {languages.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative flex cursor-pointer justify-between items-center flex-row gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={40} strokeWidth={2} aria-hidden="true" />
                    <Label htmlFor={item.id}>{item.label}</Label>
                  </div>
                  <div className="flex justify-between gap-2">
                    <Checkbox
                      id={item.id}
                      value={item.id}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedLangs((langs) => [...langs, item.label]);
                        } else {
                          let items = selectedLangs.filter(
                            (lang) => lang !== item.label
                          );
                          setSelectedLangs(items);
                        }
                      }}
                      className="order-1 after:absolute after:inset-0"
                      defaultChecked={item.selected}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-9 md:mt-96 flex flex-row-reverse gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setData((data: any) => ({ ...data, languages: selectedLangs }));
            setStep("step-3");
          }}
        >
          Next
        </Button>
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setStep("step-1");
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}
