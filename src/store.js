import { createStore, applyMiddleware } from "redux";
import { appReduser } from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(appReduser, applyMiddleware(thunk));
