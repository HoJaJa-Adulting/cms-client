import React from "react";
import { Heading } from "./elements";

type Heading1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading1({
  children,
  className,
}: Heading1Props): React.ReactElement {
  return <Heading className={className}>{children}</Heading>;
}
