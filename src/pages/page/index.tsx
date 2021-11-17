import React, { useContext, useEffect } from "react";
import axios from "api/contentApi";
import { Context as AuthContext } from "context/AuthContext";
import Heading1 from "components/Heading1";
import PagesOverviewTable from "components/Tables/PagesOverviewTable";

export default function Pages({ pages, suggestions }) {
  const { state, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Heading1>Pages</Heading1>
      <PagesOverviewTable
        pages={pages}
        suggestions={suggestions}
        isAdmin={state?.user?.role === "admin"}
      />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;
  const suggestionReq = await fetch(`${axios.defaults.baseURL}/suggestion/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const suggestionData = await suggestionReq.json();

  const pageReq = await fetch(`${axios.defaults.baseURL}/page/`);
  const pageData = await pageReq.json();

  return {
    props: { suggestions: suggestionData, pages: pageData },
  };
}
