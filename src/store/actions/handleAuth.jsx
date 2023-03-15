import axios from "axios";

const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const LOGOUT = "LOGOUT";

export const auth = (email, password, isSignup, username) => {
  return async (dispatch) => {
    dispatch(AuthStart());
    try {
      const key = "AIzaSyCeRyoc7cOwL75bQHwVVTW1gkTq1t-BQIo";
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

      if (!isSignup) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
      }
      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      dispatch(AuthSuccess(response.data));
      const number = Math.floor(Math.random() * 60) + 1;
      const data = {
        id: crypto.randomUUID(),
        username: username,
        user_image: `https://picsum.photos/id/${number}/200/300`,
        email: email,
      };
      const resp = axios.post(
        "https://instagram-clone-7ee14-default-rtdb.europe-west1.firebasedatabase.app/",
        data
      );
      console.log(resp.data);
    } catch (error) {
      alert(error.response.data.error.message);
      console.log(error.response.data.error.message);
    }
  };
};

export const AuthStart = () => {
  return {
    type: AUTH_START,
  };
};

export const AuthSuccess = (userData) => {
  return {
    type: AUTH_SUCCESS,
    token: userData.idToken,
    userID: userData.localId,
  };
};

export const AuthFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: LOGOUT,
  };
};

export const authCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const userId = localStorage.getItem("userId");
    dispatch(
      AuthSuccess({
        idToken: token,
        localId: userId,
      })
    );
  };
};

export { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT };
