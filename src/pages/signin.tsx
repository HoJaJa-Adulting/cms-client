import React, { useContext, ReactElement } from "react";
import { Context as AuthContext } from "context/AuthContext";
import NoAuthLayout from "components/NoAuthLayout";
import AuthForm from "components/AuthForm";

export default function Signin() {
  const { signin } = useContext(AuthContext);

  return <AuthForm formTitle={"Sign in"} onClick={signin} />;
}

Signin.getLayout = function getLayout(page: ReactElement) {
  return (
    <NoAuthLayout hrefText={"Sign Up"} href={"/signup"}>
      {page}
    </NoAuthLayout>
  );
};
