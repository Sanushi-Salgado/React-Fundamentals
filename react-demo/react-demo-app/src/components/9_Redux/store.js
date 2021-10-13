import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  // Creates multiple enhancers
  compose(
    applyMiddleware(...middleware),
    // Implement the Redux Dev Tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
