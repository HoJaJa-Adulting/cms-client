import React from "react";
import Link from "next/link";
import { Button as ButtonComponent } from "./elements";

type ButtonProps = {
  large?: boolean;
  long?: boolean;
  outlined?: boolean;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
};

export default function Button({
  large,
  long,
  outlined,
  onClick,
  href,
  children,
}: ButtonProps): React.ReactElement {
  if (href) {
    return (
      <Link href={href}>
        <ButtonComponent large={large} long={long} outlined={outlined}>
          {children}
        </ButtonComponent>
      </Link>
    );
  }
  return (
    <ButtonComponent
      large={large}
      long={long}
      outlined={outlined}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
}
