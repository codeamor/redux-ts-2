import PokemonReducer from "./PokemonReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  PokemonReducer,
});

export default rootReducer;
