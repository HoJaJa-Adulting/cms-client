import React, { useContext } from "react";
import Link from "next/link";
import { Context as AuthContext } from "context/AuthContext";

export default function Home() {
  const { state } = useContext(AuthContext);
  return (
    <div>
      <main>
        <h1>CMS TEMPLATE</h1>
        <Link href="/page">
          <a className="button primary-button">Pages</a>
        </Link>
      </main>
    </div>
  );
}
