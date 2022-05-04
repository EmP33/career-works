import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  currentProject: {},
};

/* Creating a slice of the state. */
const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects(state, action) {
      state.projects = action.payload;
    },
    setCurrentProject(state, action) {
      state.currentProject = state.projects.find(
        (project) => project.id === action.payload
      );
    },
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice;
