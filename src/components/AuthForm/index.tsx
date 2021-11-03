import React, { useState } from "react";
import { Wrapper, Title, Form, Input, Button } from "./elements";

type AuthFormProps = {
  onClick: ({ name, email, password }) => void;
  formTitle: string;
  includeName?: boolean;
};

export default function AuthForm({
  onClick,
  formTitle,
  includeName,
}: AuthFormProps): React.ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Title>{formTitle}</Title>
      <Form>
        {includeName && (
          <Input
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            aria-label={"Name"}
            placeholder={"Name"}
          />
        )}
        <Input
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          aria-label={"Email"}
          placeholder={"Email"}
        />
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          aria-label={"Password"}
          placeholder={"Password"}
        />
      </Form>
      <Button large long onClick={() => onClick({ name, email, password })}>
        {formTitle}
      </Button>
    </Wrapper>
  );
}
