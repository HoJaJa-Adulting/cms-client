import createDataContext from "./createDataContext";
import ContentApi from "api/contentApi";
import router from "next/router";
import Cookies from "js-cookie";

const contentReducer = (state, action) => {
  switch (action.type) {
    case "save_content":
      return {
        ...state,
        [action.payload.name]: action.payload.content,
      };
    default:
      return state;
  }
};

const getContent = (dispatch) => async (name) => {
  try {
    const response = await ContentApi.get(`/page/${name}`);

    dispatch({
      type: "save_content",
      payload: { name, content: response.data.content },
    });
  } catch (error) {
    console.log("No page!");
  }
};

const createSuggestion = () => async (pageId, suggestions) => {
  const token = Cookies.get("token");
  try {
    await ContentApi.post(
      `/suggestion/`,
      { page: pageId, suggestions },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("Failed to update!:", error.message);
  }
};

const updateContent = (dispatch) => async (name, id, content) => {
  const token = Cookies.get("token");
  try {
    await ContentApi.put(
      `/page/${name}`,
      { content, lastUpdated: Date.now() },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await ContentApi.put(
      `/suggestion/${id}`,
      { status: "approved" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "save_content",
      payload: { name, content },
    });
    router.push("/suggestion");
  } catch (error) {
    console.log("Failed to update!:", error.message);
  }
};

const rejectSuggestion = (dispatch) => async (name, id, content) => {
  const token = Cookies.get("token");
  try {
    await ContentApi.put(
      `/suggestion/${id}`,
      { status: "declined" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "save_content",
      payload: { name, content },
    });
    router.push("/suggestion");
  } catch (error) {
    console.log("Failed to update!:", error.message);
  }
};

export const { Provider, Context } = createDataContext(
  contentReducer,
  {
    getContent,
    createSuggestion,
    updateContent,
    rejectSuggestion,
  },
  {
    Signup: {},
  }
);
