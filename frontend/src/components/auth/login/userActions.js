import axios from "axios";

export const getUser = (_id) => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/auth/loggedIn");
  dispatch({
    type: getUser,
    payload: res.data.data,
  });
};
