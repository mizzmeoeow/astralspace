import { combineReducers } from "redux";
import authReducer from "./reducer.auth";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
