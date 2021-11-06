import React from "react";
import { Wrapper } from "./elements";

type SideBarProps = {
  className?: string;
};

export default function SideBar({
  className,
}: SideBarProps): React.ReactElement {
  return <Wrapper className={className}></Wrapper>;
}
