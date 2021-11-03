import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthPage from "../components/AuthPage";

export default function Signup() {
  const { signup } = useContext(AuthContext);

  return (
    <AuthPage
      hrefText={"Sign In"}
      href={"/signin"}
      formTitle={"Sign up"}
      onFormClick={signup}
      includeName
    />
  );
}
