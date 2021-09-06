import React, { useState, useContext } from "react";
import { Context as ContentContext } from "../../../context/ContentContext";
import axios from "../../../api/contentApi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Page({ page }) {
  const { updateContent } = useContext(ContentContext);

  const [data, setData] = useState(page.content);
  const [dataHasChanged, setDataHasChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  console.log("Loading:", isLoading);

  const dataIsIncomplete =
    data.filter((langObj) => {
      return (
        Object.values(langObj).filter((value) => value.length === 0).length !==
        0
      );
    }).length !== 0;

  return (
    <div>
      <main>
        <h1>EDIT PAGE: {id}</h1>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => {
                return <th key={`header-${key}`}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((lang, index) => {
              return (
                <tr key={`${lang.language}-content`}>
                  {Object.keys(lang).map((key) => {
                    return (
                      <td key={`${lang.language}-${key}`}>
                        <input
                          value={data[index][key]}
                          onChange={(event) => {
                            [
                              setData([
                                ...data.slice(0, index),
                                { ...data[index], [key]: event.target.value },
                                ...data.slice(index + 1),
                              ]),
                              setDataHasChanged(true),
                            ];
                          }}
                          style={{
                            border: `${
                              data[index][key].length === 0
                                ? "1px solid red"
                                : "inherit"
                            }`,
                          }}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {dataIsIncomplete ? (
          <p style={{ color: "red" }}>Cannot have empty inputs</p>
        ) : (
          <div style={{ height: "53px" }}></div>
        )}
        <button
          className="button secondary-button"
          onClick={() => [
            setData(() => {
              const newLangObj = Object.assign(
                {},
                ...Object.keys(data[0]).map((key) => ({
                  [key]: "",
                }))
              );
              const newData = [...data, newLangObj];

              return newData;
            }),
            setDataHasChanged(true),
          ]}
        >
          New Language
        </button>
        <button
          className={`button primary-button${
            dataIsIncomplete || isLoading || !dataHasChanged
              ? " disabled-button"
              : ""
          }`}
          disabled={dataIsIncomplete || isLoading || !dataHasChanged}
          onClick={() => [
            setIsLoading(true),
            updateContent("Signup", data),
            setDataHasChanged(false),
            setIsLoading(false),
          ]}
        >
          Save Changes
        </button>
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, params }) {
  const token = req.headers?.cookie?.split("=")[1];
  console.log("token:", token);
  const request = await fetch(
    `${axios.defaults.baseURL}/page/${params.id}/edit`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await request.json();

  return {
    redirect: data.error && {
      destination: "/signin",
      permanent: false,
    },
    props: { page: data },
  };
}
