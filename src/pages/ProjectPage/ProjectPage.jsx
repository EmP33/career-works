import React from "react";
import { Button, Container, Fab, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../../components/Layout/Layout";

import { useSelector } from "react-redux";

import images from "../../assets";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const ProjectPage = () => {
  const params = useParams();
  const projects = useSelector((state) => state.project.projects);
  const project = projects.find((proj) => proj.id === +params.id);

  if (!project) {
    return "";
  }

  return (
    <Layout>
      <Container
        maxWidth={{ xs: "xxl", sm: "xl" }}
        sx={{
          background: "#fff",
          padding: { xs: 2, sm: 5 },
          borderRadius: { sm: 3 },
          marginTop: { sm: 5, lg: 10 },
          minHeight: { xs: "100vh", sm: "auto" },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, sm: 3, lg: 5 }}
          direction={{ xs: "column-reverse", lg: "row" }}
        >
          <Grid item md={12} lg={6}>
            <Box sx={{ width: "100%" }}>
              <img
                src={images[project.image].normal}
                alt="Project"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item md={12} lg={6} sx={{ padding: 0, position: "relative" }}>
            <Typography
              color="primary"
              variant="h1"
              gutterBottom
              sx={{ fontSize: { xs: 40, sm: 50 } }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              gutterBottom
              sx={{ fontSize: { xs: 15, sm: 18 } }}
            >
              {project.description}
            </Typography>
            <ProjectAction>
              <Link to="/">
                <Button color="primary" size="large">
                  Back to Home
                </Button>
              </Link>
              <a href={project.url} target="_blank" rel="noreferrer">
                <Button color="primary" size="large" variant="outlined">
                  Show Project
                </Button>
              </a>
            </ProjectAction>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Fab
                  aria-label="github"
                  color="primary"
                  size="small"
                  sx={{ position: "absolute", right: 0, top: 45, p: 2 }}
                >
                  <GitHubIcon sx={{ fontSize: 25 }} />
                </Fab>
              </a>
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProjectPage;
