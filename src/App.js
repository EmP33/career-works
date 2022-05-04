import React, { useEffect } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { MainPage, ProjectPage } from "./pages";

import { projectActions } from "./store/project-slice";
import data from "./data/data.json";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#583d72" },
  },
});
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectActions.fetchProjects(data.projects));
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
