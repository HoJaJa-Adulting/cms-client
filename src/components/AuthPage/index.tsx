import React from "react";
import { TopBar, Main, AuthForm } from "./elements";

type AuthPageProps = {
  href: string;
  hrefText: string;
  onFormClick: () => void;
  formTitle: string;
  includeName?: boolean;
};

export default function AuthPage({
  href,
  hrefText,
  onFormClick,
  formTitle,
  includeName,
}: AuthPageProps): React.ReactElement {
  return (
    <>
      <TopBar name={"hojaja cms"} buttonText={hrefText} href={href}></TopBar>
      <Main>
        <AuthForm
          formTitle={formTitle}
          onClick={onFormClick}
          includeName={includeName}
        />
      </Main>
    </>
  );
}
