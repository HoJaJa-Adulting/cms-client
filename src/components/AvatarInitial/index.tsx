import React from "react";
import { Avatar, Initials } from "./elements";

type Heading1Props = {
  className?: string;
};

export default function Heading1({
  className,
}: Heading1Props): React.ReactElement {
  return (
    <Avatar className={className}>
      <Initials>{"J"}</Initials>
    </Avatar>
  );
}
