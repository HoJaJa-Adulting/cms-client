import React, { useContext, ReactElement } from "react";
import { Context as AuthContext } from "context/AuthContext";
import NoAuthLayout from "components/NoAuthLayout";
import AuthForm from "components/AuthForm";

export default function Signup() {
  const { signup } = useContext(AuthContext);

  return <AuthForm formTitle={"Sign up"} onClick={signup} includeName />;
}

Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <NoAuthLayout hrefText={"Sign In"} href={"/signin"}>
      {page}
    </NoAuthLayout>
  );
};
