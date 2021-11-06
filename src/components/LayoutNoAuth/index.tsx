import React from "react";
import { TopBar, Main } from "./elements";

type LayoutNoAuthProps = {
  href: string;
  hrefText: string;
  children: React.ReactNode;
};

export default function LayoutNoAuth({
  href,
  hrefText,
  children,
}: LayoutNoAuthProps): React.ReactElement {
  return (
    <>
      <TopBar name={"hojaja cms"} buttonText={hrefText} href={href}></TopBar>
      <Main>{children}</Main>
    </>
  );
}
