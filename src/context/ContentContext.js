import createDataContext from "./createDataContext";
import ContentApi from "../api/contentApi";
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

const updateContent = (dispatch) => async (name, content) => {
  const token = Cookies.get("token");
  try {
    await ContentApi.put(
      `/page/${name}`,
      { content },
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
  } catch (error) {
    console.log("Failed to update!:", error.message);
  }
};

export const { Provider, Context } = createDataContext(
  contentReducer,
  {
    getContent,
    updateContent,
  },
  {
    Signup: {},
  }
);
