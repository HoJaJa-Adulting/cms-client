import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper, Text } from "./elements";

type LogoAndNameProps = {
  className?: string;
  imagePath: string;
  imageAlt: string;
  name: string;
};

export default function LogoAndName({
  className,
  imagePath,
  imageAlt,
  name,
}: LogoAndNameProps): React.ReactElement {
  return (
    <Link href={"/"}>
      <Wrapper className={className}>
        <Image src={imagePath} alt={imageAlt} width={"48"} height={"48"} />
        <Text>{name}</Text>
      </Wrapper>
    </Link>
  );
}
