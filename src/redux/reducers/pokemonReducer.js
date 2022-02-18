import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemons: [],
  selectedPokemon: {},
};

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };
    case ActionTypes.SET_POKEMON_SELECTED:
      return {
        ...state,
        selectedPokemon: payload,
      };
    default:
      return state;
  }
}
