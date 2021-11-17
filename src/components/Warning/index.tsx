import React from "react";
import Link from "next/link";
import ReportProblemIcon from "@material-ui/icons/ReportProblemOutlined";
import { Wrapper, Text, Action } from "./elements";

type WarningProps = {
  text: string;
  actionText: string;
  href: string;
  className?: string;
};

export default function Warning({
  text,
  actionText,
  href,
  className,
}: WarningProps): React.ReactElement {
  return (
    <Wrapper className={className}>
      <ReportProblemIcon style={{ color: "#FF9800" }} />
      <Text>{text}</Text>
      <Link href={href}>
        <Action>{actionText}</Action>
      </Link>
    </Wrapper>
  );
}
