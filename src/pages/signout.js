import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

export default function Signout() {
  const { signout } = useContext(AuthContext);

  return (
    <div>
      <main>
        <h1>SIGN OUT</h1>
        <button className="button primary-button" onClick={() => signout()}>
          Sign Out
        </button>
      </main>
    </div>
  );
}
