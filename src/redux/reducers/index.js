import { combineReducers } from "redux";

import exampleReducer from "./exampleReducer";

const reducers = combineReducers({
    exampleReducer: exampleReducer
})

export default reducers;