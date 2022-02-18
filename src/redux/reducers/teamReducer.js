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
    default:
      return state;
  }
};
