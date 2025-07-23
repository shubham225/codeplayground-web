"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Tag, TagInput } from "emblor";
import { useId, useState } from "react";

type Props = {
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  tags: Tag[];
  message?: string | undefined;
};

export default function InputTags({ message, tags, setTags, ...props }: Props) {
  const id = useId();
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className="space-y-1 w-full">
      <Label htmlFor={id}>Tags</Label>
      <TagInput
        id={id}
        tags={tags}
        setTags={(newTags) => {
          setTags(newTags);
        }}
        placeholder="Add a tag"
        styleClasses={{
          inlineTagsContainer: cn(
            "border-input rounded-lg bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 p-1 gap-1",
            {
              "border-destructive/80 text-destructive focus-within:border-destructive/80 focus-within:ring-destructive/20 focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
                message,
            }
          ),
          input:
            "w-full min-w-[80px] focus-visible:outline-none shadow-none px-2 h-7",
          tag: {
            body: "h-7 relative bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
            closeButton:
              "absolute -inset-y-px -end-px p-0 rounded-e-lg flex size-7 transition-colors outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 text-muted-foreground/80 hover:text-foreground",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
        {...props}
      />
      <p className="text-xs text-destructive" role="alert" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
