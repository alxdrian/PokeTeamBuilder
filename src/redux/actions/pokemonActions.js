import { ActionTypes } from "../constants/action-types";

export const setPokemons = (pokemons) => {
  return {
    type: ActionTypes.SET_POKEMONS,
    payload: pokemons,
  }
}

export const setPokemonSelected = (pokemon) => {
  return {
    type: ActionTypes.SET_POKEMON_SELECTED,
    payload: pokemon,
  }
}