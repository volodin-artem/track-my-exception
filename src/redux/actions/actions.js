import actionTypes from "./actionTypes.js";

const changeProject = (project) => ({
  type: actionTypes.SET_PROJECT_PROFILE,
  project,
});

export { changeProject };
