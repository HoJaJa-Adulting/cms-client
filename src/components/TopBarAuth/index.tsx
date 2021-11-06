import React from "react";
import { Container, Avatar } from "./elements";

type TopBarProps = {
  className?: string;
};

export default function TopBarAuth({
  className,
}: TopBarProps): React.ReactElement {
  return (
    <Container className={className}>
      <Avatar />
    </Container>
  );
}
