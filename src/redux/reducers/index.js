import { combineReducers } from "redux";

import exampleReducer from "./exampleReducer";
import memberReducer from "./memberReducer";

const reducers = combineReducers({
    exampleReducer: exampleReducer,
    member: memberReducer
})

export default reducers;