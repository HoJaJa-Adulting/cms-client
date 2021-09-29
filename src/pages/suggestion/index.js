import React, { useState, useContext } from "react";
import { Context as ContentContext } from "../../context/ContentContext";
import axios from "../../api/contentApi";

export default function Pages({ suggestions, pages }) {
  const { updateContent, rejectSuggestion } = useContext(ContentContext);
  const [isLoading, setIsLoading] = useState(false);

  const mappedPages = Object.assign(
    {},
    ...pages.map((page, index) => {
      return {
        [page._id]: {
          ...page,
          index,
          content: Object.assign(
            {},
            ...page.content.map((cont) => ({ [cont.language]: { ...cont } }))
          ),
        },
      };
    })
  );

  return (
    <div>
      <main>
        <h1>All Updates</h1>
        <table>
          <thead>
            <tr>
              <th>Page Name</th>
              <th>Language</th>
              <th>Original Content</th>
              <th>Suggested Change</th>
              <th>Accept Changes</th>
              <th>Decline Changes</th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map((suggestion, index) => {
              if (suggestion.status && suggestion.status !== "waiting") {
                return null;
              }
              const pageIndex = mappedPages[suggestion.page].index;
              const changesToSave = Object.assign({}, pages[pageIndex], {
                content: [
                  ...pages[pageIndex].content.map((lang) => {
                    return Object.assign(
                      {},
                      lang,
                      ...suggestion.suggestions.filter((suggLang) => {
                        return suggLang.language === lang.language;
                      })
                    );
                  }),
                ],
              });

              return (
                <tr
                  key={`${
                    mappedPages[suggestion.page].name
                  }-suggestion-${index}`}
                >
                  <td>{mappedPages[suggestion.page].name}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        "flex-direction": "column",
                        "justify-content": "space-evenly",
                        "align-items": "flex-start",
                        height: "100%",
                      }}
                    >
                      {suggestion.suggestions.map((sugg) => {
                        return <p>{sugg.language}</p>;
                      })}
                    </div>
                  </td>
                  <td>
                    {suggestion.suggestions.map((sugg) => {
                      return Object.keys(sugg)
                        .filter((s) => s !== "language")
                        .map((s) => {
                          return (
                            <p>
                              {
                                mappedPages[suggestion.page].content[
                                  sugg.language
                                ][s]
                              }
                            </p>
                          );
                        });
                    })}
                  </td>
                  <td>
                    {suggestion.suggestions.map((sugg) => {
                      return Object.keys(sugg)
                        .filter((s) => s !== "language")
                        .map((s) => {
                          return <p>{sugg[s]}</p>;
                        });
                    })}
                  </td>
                  <td>
                    <button
                      className={`button primary-button${
                        isLoading ? " disabled-button" : ""
                      }`}
                      disabled={isLoading}
                      onClick={() => [
                        setIsLoading(true),
                        updateContent(
                          "Signup",
                          suggestion._id,
                          changesToSave.content
                        ),
                        setIsLoading(false),
                      ]}
                    >
                      Save Changes
                    </button>
                  </td>
                  <td>
                    <button
                      className={`button primary-button${
                        isLoading ? " disabled-button" : ""
                      }`}
                      disabled={isLoading}
                      onClick={() => [
                        setIsLoading(true),
                        rejectSuggestion(suggestion._id),
                        setIsLoading(false),
                      ]}
                    >
                      Reject Changes
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.headers?.cookie?.split("=")[1];
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
