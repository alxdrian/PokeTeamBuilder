import { ActionTypes } from "../constants/action-types";

const initialState = {
  team: [],
};

export const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TEAM:
      return {
        ...state,
        team: payload,
      };
    case ActionTypes.ADD_TO_TEAM:
      return {
        ...state,
        team: [...state.team, payload],
      }
    case ActionTypes.REMOVE_FROM_TEAM:
      return {
        ...state,
        team: state.team.filter(pokemon => pokemon.id !== payload.id),
      }
    default:
      return state;
  }
};
