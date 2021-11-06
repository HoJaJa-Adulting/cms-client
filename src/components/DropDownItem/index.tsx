import React from "react";
import Link from "next/link";
import { Button, ButtonText } from "./elements";

type DropDownItemProps = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
};

export default function DropDownItem({
  onClick,
  href,
  children,
}: DropDownItemProps): React.ReactElement {
  if (href) {
    return (
      <Link href={href}>
        <Button>
          <ButtonText>{children}</ButtonText>
        </Button>
      </Link>
    );
  }
  return (
    <Button onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
