import { ActionTypes } from "../constants/action-types";

export const setTeam = (team) => {
  return {
    type: ActionTypes.SET_TEAM,
    payload: team,
  }
}