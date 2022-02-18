import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer";
import { teamReducer } from "./teamReducer";

const reducers = combineReducers({
    pokemons: pokemonReducer,
    team: teamReducer,
});

export default reducers;