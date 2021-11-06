import React, { useContext, ReactElement } from "react";
import { Context as AuthContext } from "context/AuthContext";
import LayoutNoAuth from "components/LayoutNoAuth";
import AuthForm from "components/AuthForm";

export default function Signin() {
  const { signin } = useContext(AuthContext);

  return <AuthForm formTitle={"Sign in"} onClick={signin} />;
}

Signin.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutNoAuth hrefText={"Sign Up"} href={"/signup"}>
      {page}
    </LayoutNoAuth>
  );
};
