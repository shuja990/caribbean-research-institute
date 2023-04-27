import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from "../constants/userConstants";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../pages/_app";
import { doc, getDoc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const data = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "users", data.user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: docSnap.data(),
      });
    } else {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: "User Not found",
      });
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loginWithGoogle = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const data = await signInWithPopup(auth, provider);

    const docRef = doc(db, "users", data.user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: docSnap.data(),
      });
      navigate("/");
    } else {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: "User Not found",
      });
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  console.log("first")
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LIST_RESET });
  document.location.href = "/login";
};

export const registerWithEmailandPassword =
  (email, password, phone, name) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      await createUserWithEmailAndPassword(auth, email, password);
      let s = await setDoc(doc(db, "users", email), {
        email,
        isAdmin: false,
        name,
        phone,
        preferences: [],
      });
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: docSnap.data(),
        });

        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: docSnap.data(),
        });
      } else {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: "User Not found",
        });
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const registerWithGoogle = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const data = await signInWithPopup(auth, provider);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/signupdetails");
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerDetails =
  (
    type,
    name,
    location,
    genre,
    soundcloud,
    youtube,
    instagram,
    wallet,
    navigate
  ) =>
  async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      let s = await setDoc(doc(db, "users", userInfo?.user?.email), {
        email: userInfo?.user?.email,
        isAdmin: false,
        type,
        name,
        location,
        genre,
        soundcloud,
        youtube,
        instagram,
        wallet,
      });
      const docRef = doc(db, "users", userInfo.user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: docSnap.data(),
        });

        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: docSnap.data(),
        });
        navigate("/");
      } else {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: "User Not found",
        });
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    dispatch({
      type: USER_DETAILS_SUCCESS,
      //   payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      //   payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      //   payload: data,
    });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    dispatch({
      type: USER_LIST_SUCCESS,
      //   payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    dispatch({ type: USER_UPDATE_SUCCESS });

    // dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};
