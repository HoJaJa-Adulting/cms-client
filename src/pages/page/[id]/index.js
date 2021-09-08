import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../../api/contentApi";
import Link from "next/link";
import { Context as AuthContext } from "../../../context/AuthContext";

export default function Page({ page }) {
  const router = useRouter();
  const { id } = router.query;
  const { state, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <main>
        <h1>PAGE: {id}</h1>
        <table>
          <thead>
            <tr>
              {Object.keys(page.content[0]).map((key) => {
                return <th key={`header-${key}`}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {page.content.map((lang) => {
              return (
                <tr key={`${lang.language}-content`}>
                  {Object.entries(lang).map(([key, value]) => {
                    return <td key={`${lang.language}-${key}`}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {state.user && (
          <Link href={`./${id}/edit`}>
            <a className="button primary-button">Edit</a>
          </Link>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const pageReq = await fetch(`${axios.defaults.baseURL}/page/${params.id}`);
  const pageData = await pageReq.json();

  return {
    props: {
      page: pageData,
    },
  };
}
