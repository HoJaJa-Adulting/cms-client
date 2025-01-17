import createDataContext from "./createDataContext";
import AuthApi from "api/contentApi";
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
  async ({ name, email, password }) => {
    try {
      const response = await AuthApi.post("/signup", {
        name,
        email: email.trim(),
        password,
      });

      Cookies.set("token", response.data.token);
      Cookies.set("userId", response.data.user._id);

      dispatch({
        type: "store_user",
        payload: response.data,
      });
      router.push("/page");
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
      Cookies.set("userId", response.data.user._id);

      dispatch({
        type: "store_user",
        payload: response.data,
      });
      router.push("/page");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const getUser = (dispatch) => async () => {
  const token = await Cookies.get("token");
  const userId = await Cookies.get("userId");
  try {
    const response = await AuthApi({
      url: `/user/${userId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "store_user",
      payload: { user: response.data.user, token, autoAuthAttempted: true },
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
    Cookies.remove("userId");
    dispatch({ type: "signout" });
    router.push("/signin");
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
