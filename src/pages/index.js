import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>CMS TEMPLATE</h1>
      <Link href="/page">
        <a className="button primary-button">Pages</a>
      </Link>
    </>
  );
}
