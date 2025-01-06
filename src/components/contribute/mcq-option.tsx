"use client";

import { GripVertical, X } from "lucide-react";
import React from "react";
import { RadioGroupItem } from "../ui/radio-group";
import SimpleInput from "../custom-ui/input/SimpleInput";
import { Button } from "../ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Checkbox } from "../ui/checkbox";

type Props = {
  id: string;
  option: { id: string; text: string; isAnswer: boolean };
  checkbox: boolean;
  onRemoveOption: (id: string) => void;
};

export default function MCQOption({
  id,
  option,
  checkbox,
  onRemoveOption,
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex items-center gap-2"
    >
      <GripVertical size={18} />
      <div className="border w-9 h-9 hover:bg-accent rounded-lg flex items-center justify-center">
        {checkbox ? (
          <Checkbox id={option.id} checked={option.isAnswer} />
        ) : (
          <RadioGroupItem
            checked={option.isAnswer}
            value={option.id}
            id={option.id}
          />
        )}
      </div>
      <SimpleInput
        id="option-1"
        placeholder="Add text for option"
        value={option.text}
        onChange={(e) => {
          e.preventDefault();
          option.text = e.target.value;
        }}
      />
      <Button
        variant="ghost"
        size="icon"
        className="gap-2"
        onClick={(e) => {
          e.preventDefault();
          onRemoveOption(option.id);
        }}
      >
        <X size={18} />
      </Button>
    </div>
  );
}
