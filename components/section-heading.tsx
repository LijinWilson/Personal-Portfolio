import React from "react";

// defining the type of node
type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function sectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
