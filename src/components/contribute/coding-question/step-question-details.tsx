import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { SelectNative } from "@/components/ui/select-native";
import { Bolt, ChevronDown, CopyPlus } from "lucide-react";
import React from "react";

type Props = {};

export default function QuestionDetails({}: Props) {
  return (
    <div className="p-5">
      <div className="flex-col gap-2">
        <SimpleInput
          id="question"
          label="Question Summery"
          placeholder="Write short summery of a question"
        />
        <div className="flex justify-between">
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <SelectNative id="difficulty">
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </SelectNative>
          </div>
        </div>
      </div>
    </div>
  );
}
