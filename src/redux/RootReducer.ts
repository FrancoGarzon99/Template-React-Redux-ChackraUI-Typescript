import { combineReducers } from "redux";

import ReducerExample from "./example/Reducer/ReducerExample";

const RootReducer = combineReducers({
  example: ReducerExample,
});

export default RootReducer;
