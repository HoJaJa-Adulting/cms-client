import createDataContext from "./createDataContext";
import AuthApi from "../api/contentApi";
import router from "next/router";
import Cookies from "js-cookie";

const authReducer = (state, action) => {
  switch (action.type) {
    case "store_user":
      return {
        ...state,
        errorMessage: "",
        token: action.payload.token,
        user: action.payload.user,
        autoAuthAttempted: action.payload.autoAuthAttempted || false,
      };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signout":
      return {
        ...state,
        errorMessage: "",
        token: null,
        autoAuthAttempted: false,
        user: null,
      };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await AuthApi.post("/signup", {
        email: email.trim(),
        password,
      });

      Cookies.set("token", response.data.token);

      dispatch({
        type: "store_user",
        payload: response.data,
      });
      router.push("/");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await AuthApi.post("/signin", {
        email: email.trim(),
        password,
      });

      Cookies.set("token", response.data.token);

      dispatch({
        type: "store_user",
        payload: response.data,
      });
      router.push("/");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const getUser = (dispatch) => async () => {
  const token = await Cookies.get("token");
  try {
    const response = await AuthApi({
      url: "/user",
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "store_user",
      payload: { user: response.data, token, autoAuthAttempted: true },
    });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "No current user",
    });
  }
};

const signout = (dispatch) => async () => {
  const token = Cookies.get("token");
  try {
    await AuthApi.post(
      "/signout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Cookies.remove("token");
    dispatch({ type: "signout" });
    router.push("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign out",
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    getUser,
    signout,
  },
  {
    token: null,
    errorMessage: "",
    autoAuthAttempted: false,
    user: null,
  }
);
