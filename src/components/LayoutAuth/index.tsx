import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Context as AuthContext } from "context/AuthContext";
import { SideBar, TopBar, Main, Container, MainContent } from "./elements";

type LayoutAuthProps = {
  children: React.ReactNode;
};

export default function LayoutAuth({
  children,
}: LayoutAuthProps): React.ReactElement {
  const { state, getUser } = useContext(AuthContext);
  const router = useRouter();
  const pageRoute = router.pathname.split("/")[1];

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <SideBar
        name={"Hojaja"}
        imagePath={"/cat.png"}
        imageAlt={"Psychedelic Cat"}
        tabs={[
          {
            name: "Dashboard",
            href: "/",
            selected: pageRoute === "",
          },
          {
            name: "Pages",
            href: "/page",
            selected: pageRoute === "page",
          },
          {
            name: "Suggested Updates",
            href: "/suggestion",
            selected: pageRoute === "suggestion",
          },
        ]}
      />
      <MainContent>
        <TopBar name={state?.user?.name ?? "-"}></TopBar>
        <Main>{children}</Main>
      </MainContent>
    </Container>
  );
}
