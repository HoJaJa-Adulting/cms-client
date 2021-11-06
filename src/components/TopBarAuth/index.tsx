import React, { useState, useContext } from "react";
import { Context as AuthContext } from "context/AuthContext";
import { Container, Avatar, DropDown, DropDownItem } from "./elements";

type TopBarProps = {
  name: string;
  className?: string;
};

export default function TopBarAuth({
  name,
  className,
}: TopBarProps): React.ReactElement {
  const { signout } = useContext(AuthContext);
  const [display, setDisplay] = useState(false);
  const ddItems = [{ text: "Log out", action: signout }];

  return (
    <>
      <Container className={className}>
        <button onClick={() => setDisplay(!display)}>
          <Avatar name={name} />
        </button>
      </Container>
      <DropDown $display={display}>
        {ddItems.map((ddItem) => {
          return (
            <DropDownItem key={ddItem.text} onClick={ddItem.action}>
              {ddItem.text}
            </DropDownItem>
          );
        })}
      </DropDown>
    </>
  );
}
