import React, { useState, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

export default function Signup() {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <main>
        <h1>SIGN UP</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </form>
        <button
          className="button primary-button"
          onClick={() => signup({ email, password })}
        >
          Sign Up
        </button>
      </main>
    </div>
  );
}
