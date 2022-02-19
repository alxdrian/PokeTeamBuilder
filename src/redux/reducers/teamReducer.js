import { ActionTypes } from "../constants/action-types";

const initialState = {
  teams: {},
  team: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  },
  teamName: "",
};

export const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SAVE_TEAM:
      return {
        ...state,
        teams: {...state.teams, [state.teamName]: payload.team},
        selectedTeam: {
            0: "",
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
          },
        teamName: ""
      };
    case ActionTypes.SET_TEAM_NAME:
      return {
        ...state,
        teamName: payload,
      };
    case ActionTypes.ADD_TO_TEAM:
      return {
        ...state,
        selectedTeam: {...state.selectedTeam, [payload.index]: payload.pokemon},
      };
    case ActionTypes.REMOVE_FROM_TEAM:
      return {
        ...state,
        selectedTeam: {...state.selectedTeam, [payload]: ""},
      };
    case ActionTypes.SET_SELECTED_TEAM:
      return {
        ...state,
        selectedTeam: payload,
      };
    default:
      return state;
  }
};
