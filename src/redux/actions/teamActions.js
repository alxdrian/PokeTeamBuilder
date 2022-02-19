import { ActionTypes } from "../constants/action-types";

export const setTeam = (team) => {
  return {
    type: ActionTypes.SET_TEAM,
    payload: team,
  }
}

export const addToTeam = (pokemon) => {
  return {
    type: ActionTypes.ADD_TO_TEAM,
    payload: pokemon,
  }
}

export const removeFromTeam = (pokemon) => {
  return {
    type: ActionTypes.REMOVE_FROM_TEAM,
    payload: pokemon,
  }
}