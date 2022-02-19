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
    case ActionTypes.SET_TEAM:
      return {
        ...state,
        teams: {...state.teams, [state.teamName]: payload.team},
        team: {
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
        team: {...state.team, [payload.index]: payload.pokemon},
      };
    case ActionTypes.REMOVE_FROM_TEAM:
      return {
        ...state,
        team: {...state.team, [payload]: ""},
      };
    default:
      return state;
  }
};
