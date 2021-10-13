import { combineReducers } from "redux";
import postReducer from "./postReducer";

// Create the root reducer
export default combineReducers({
  posts: postReducer
});
