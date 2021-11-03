import React, { useContext, useEffect } from "react";
import axios from "../../api/contentApi";
import Link from "next/link";
import { Context as AuthContext } from "../../context/AuthContext";

export default function Pages({ pages }) {
  const { state, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <main>
        <h1>PAGE LIST</h1>
        <table>
          <tbody>
            {pages.map((page) => {
              return (
                <tr key={page.name}>
                  <td>{page.name}</td>
                  <td>
                    <Link href={`/page/${page.name}`}>
                      <a className="button primary-button">See details</a>
                    </Link>
                  </td>
                  {state?.user?.role === "admin" && (
                    <td>
                      <Link href={`/suggestion`}>
                        <a className="button secondary-button">
                          See suggested Updates
                        </a>
                      </Link>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`${axios.defaults.baseURL}/page/`);
  const data = await req.json();

  return {
    props: { pages: data },
  };
}
