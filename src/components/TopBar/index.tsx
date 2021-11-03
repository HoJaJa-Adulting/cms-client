import React from "react";
import { Container, Name, Button } from "./elements";

type TopBarProps = {
  name: string;
  href: string;
  buttonText: string;
  className?: string;
};

export default function TopBar({
  name,
  href,
  buttonText,
  className,
}: TopBarProps): React.ReactElement {
  return (
    <Container className={className}>
      <Name>{name}</Name>
      <Button large outlined href={href}>
        {buttonText}
      </Button>
    </Container>
  );
}
