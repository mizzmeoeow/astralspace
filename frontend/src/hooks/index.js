import { combineReducers } from "redux";
import authReducer from "./reducerAuth";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
