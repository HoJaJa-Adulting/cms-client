import React, { useState, useContext } from "react";
import { Context as ContentContext } from "context/ContentContext";
import axios from "api/contentApi";
import { useRouter } from "next/router";

export default function Page({ page }) {
  const { createSuggestion } = useContext(ContentContext);

  const [data, setData] = useState(page.content);
  const [dataHasChanged, setDataHasChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const dataIsIncomplete =
    data.filter((langObj) => {
      return (
        Object.values(langObj).filter((value) => value.length === 0).length !==
        0
      );
    }).length !== 0;

  const suggestions = data.flatMap((obj, index) => {
    const changes = Object.keys(obj)
      .filter((contentKey) => {
        return obj[contentKey] !== page.content[index][contentKey];
      })
      .map((key) => ({ [key]: obj[key] }));

    return Object.keys(changes).length > 0
      ? Object.assign({ language: obj.language }, ...changes)
      : [];
  });

  return (
    <>
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
        className="button clear-button"
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
          dataIsIncomplete ||
          isLoading ||
          !dataHasChanged ||
          suggestions.length === 0
            ? " disabled-button"
            : ""
        }`}
        disabled={
          dataIsIncomplete ||
          isLoading ||
          !dataHasChanged ||
          suggestions.length === 0
        }
        onClick={() => [
          setIsLoading(true),
          createSuggestion(page._id, suggestions),
          setDataHasChanged(false),
          setIsLoading(false),
        ]}
      >
        Save Changes
      </button>
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const { token } = req.cookies;
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
    props: { page: data },
  };
}
