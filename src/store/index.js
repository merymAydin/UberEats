import { createStore, applyMiddleware } from "redux";
import clientReducer from "./reducers/clientReducer";
import { thunk } from "redux-thunk";

const store = createStore(
  clientReducer,
  applyMiddleware(thunk)
);

export default store;