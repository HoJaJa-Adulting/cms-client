import React from "react";
import { TopBar, Main } from "./elements";

type NoAuthLayoutProps = {
  href: string;
  hrefText: string;
  children: React.ReactNode;
};

export default function NoAuthLayout({
  href,
  hrefText,
  children,
}: NoAuthLayoutProps): React.ReactElement {
  return (
    <>
      <TopBar name={"hojaja cms"} buttonText={hrefText} href={href}></TopBar>
      <Main>{children}</Main>
    </>
  );
}
