import { ActionTypes } from "../constants/action-types";

export const saveTeam = (teamName, team) => {
  return {
    type: ActionTypes.SET_TEAM,
    payload: {teamName, team},
  }
}

export const setTeamName = (teamName) => {
  return {
    type: ActionTypes.SET_TEAM_NAME,
    payload: teamName,
  }
}

export const addToTeam = (pokemon, index) => {
  return {
    type: ActionTypes.ADD_TO_TEAM,
    payload: {pokemon, index},
  }
}

export const removeFromTeam = (index) => {
  return {
    type: ActionTypes.REMOVE_FROM_TEAM,
    payload: index,
  }
}

export const setSelectedTeam = (team) => {
  return {
    type: ActionTypes.SET_SELECTED_TEAM,
    payload: team,
  }
}