import React from "react";
import "./App.scss";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Main, QuoteGenerator } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quote" element={<QuoteGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
