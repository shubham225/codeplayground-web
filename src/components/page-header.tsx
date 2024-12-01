import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle, ...props}: Props) {
  return (
    <div className="mb-8">
      <div className="text-4xl font-medium leading-none flex justify-between">
        {title}
      </div>
      <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
