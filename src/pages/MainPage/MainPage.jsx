import React from "react";
import { Grid } from "@mui/material";

import CardElement from "../../components/CardElement/CardElement";
import Layout from "../../components/Layout/Layout";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

/* Importing the images from the assets folder. */
import images from "../../assets";

const MainPage = () => {
  const navigate = useNavigate();
  const projects = useSelector((state) => state.project.projects);

  return (
    <Layout>
      <Grid
        container
        spacing={5}
        sx={{ justifyContent: "center", marginTop: 5 }}
      >
        {projects.map((project) => (
          <Grid
            item
            key={project.id}
            onClick={() => {
              navigate(`/project/${project.id}`);
            }}
          >
            <CardElement
              title={project.title}
              image={images[project.image].normal}
              scroll={images[project.image]?.scroll}
              haveBiggerImage={project.haveBiggerImage}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default MainPage;
