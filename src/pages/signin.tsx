import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthPage from "../components/AuthPage";

export default function Signin() {
  const { signin } = useContext(AuthContext);

  return (
    <AuthPage
      hrefText={"Sign Up"}
      href={"/signup"}
      formTitle={"Sign in"}
      onFormClick={signin}
    />
  );
}
