import { SET_CURRENT_USER, USER_LOADING } from "../actions/actionTypes";
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";
import { getToken } from "../reducers/common";

const isEmpty = require("is-empty");

export const initialState = {
  isAuthenticated: false,
  isLoggedIn: false,
  userId: "",
  // role: "user",
  token: getToken,
  // user: {},
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  loading: false,
  isFetching: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// some test data:
// Logged in
// export const authUser = (userData) => (dispatch) =>
//   API.auth(userData).then(
//     (res) => {
//       const token = res.data;
//       sessionStorage.setItem("jwtToken", token);
//       API.setAuthToken(token);
//       const decoded = jwt.verify(token, "Secret");
//       dispatch(receiveCurrentUser(decoded));
//     },
//     (err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//   );

// Check login
// export const authSuccess = (token) => (dispatch) => {
//   if (token) {
//     API.setAuthToken(token);
//     const decoded = jwt.verify(token, "Secret");
//     console.log("decoded", decoded);
//     dispatch(setCurrentUser(decoded));
//   } else {
//     dispatch(logoutCurrentUser());
//   }
// };

// Set logged in user
// export const setCurrentUser = (decoded) => {
//   return {
//     type: RECEIVE_CURRENT_USER,
//     payload: decoded,
//   };
// };
