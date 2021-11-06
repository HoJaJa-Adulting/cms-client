import React from "react";
import { TopBar, Main } from "./elements";

type LayoutNoAuthProps = {
  children: React.ReactNode;
};

export default function LayoutNoAuth({
  children,
}: LayoutNoAuthProps): React.ReactElement {
  return (
    <>
      <TopBar></TopBar>
      <Main>{children}</Main>
    </>
  );
}
