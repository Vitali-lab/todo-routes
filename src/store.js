import { createStore, applyMiddleware } from "redux";
import { appReducer } from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(appReducer, applyMiddleware(thunk));
