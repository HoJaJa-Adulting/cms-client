import React from "react";
import { Avatar, Initials } from "./elements";

type Heading1Props = {
  name: string;
  className?: string;
};

export default function Heading1({
  name,
  className,
}: Heading1Props): React.ReactElement {
  const initial = name[0].toUpperCase();

  return (
    <Avatar className={className}>
      <Initials>{initial}</Initials>
    </Avatar>
  );
}
