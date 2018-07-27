import { createStore } from "redux";
import rootReducers from "../reducers/reducer";

export const store = createStore(rootReducers);
