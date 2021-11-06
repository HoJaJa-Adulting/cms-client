import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "context/AuthContext";
import { SideBar, TopBar, Main, Container, MainContent } from "./elements";

type LayoutAuthProps = {
  children: React.ReactNode;
};

export default function LayoutAuth({
  children,
}: LayoutAuthProps): React.ReactElement {
  const { state, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <SideBar />
      <MainContent>
        <TopBar name={state?.user?.name ?? "-"}></TopBar>
        <Main>{children}</Main>
      </MainContent>
    </Container>
  );
}
