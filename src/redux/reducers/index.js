import { combineReducers } from "redux";
import CounterReducer from "./counterReducer.";

const GeneralReducers = combineReducers({
  CounterReducer,
});

export default GeneralReducers;
