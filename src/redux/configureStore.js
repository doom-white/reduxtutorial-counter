import { createStore } from "redux";
import GeneralReducers from "./reducers";

const GeneralStore = createStore(GeneralReducers);

export default GeneralStore;
