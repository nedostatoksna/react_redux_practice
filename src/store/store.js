import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware( thunk, logger));

export default store;