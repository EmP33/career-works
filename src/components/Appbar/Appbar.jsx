import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/nobg-logo.png";

const Appbar = () => {
  return (
    <AppBar position="static" sx={{ background: "rgba(255,255,255,1)" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to="/">
          <img src={logo} alt="EmP33 Logo" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
