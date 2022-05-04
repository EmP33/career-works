import React from "react";
import { Container } from "@mui/material";

import logo from "../../assets/nobg-logo.png";
import Appbar from "../../components/Appbar/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <Container
        maxWidth="xxl"
        sx={{
          padding: { xs: 0, sm: "16px" },
          marginBottom: { xs: 0, sm: 10 },
          background:
            "linear-gradient(0deg, rgba(88,61,114,1) 0%, rgba(159,95,128,1) 100%);",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
