import actionTypes from "../actions/actionTypes.js";

const initialState = {
  project: {},
};

export function profileReducer(action, state = initialState) {
  switch (action?.type) {
    case actionTypes.SET_PROJECT_PROFILE:
      return { project: action.project };
    default: return state;
  }
}
