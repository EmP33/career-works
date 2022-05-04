import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const HoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(159, 95, 128, 0);
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.5);

    & h5 {
      transform: translate(-50%, -50%);
    }
  }
`;
const CardElement = ({ image, haveBiggerImage, scroll, title }) => {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <Card
      onMouseEnter={() => {
        setIsEnter(true);
      }}
      onMouseLeave={() => {
        setIsEnter(false);
      }}
      sx={{
        maxWidth: 400,
        maxHeight: 225,
        background: "#222",
        position: "relative",
      }}
      elevation={5}
    >
      <CardContent
        sx={{
          "&:hover": {
            "& img": {
              transform: haveBiggerImage && isEnter && "translateY(-67.5%)",
              transition: "all 1s linear",
            },
          },
        }}
      >
        <CardMedia
          component="img"
          image={haveBiggerImage && isEnter ? scroll : image}
          alt=""
          sx={{
            transform: "translateY(0)",
            transition: "all 0 linear",
          }}
        />

        <HoverWrapper>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,400%)",
              width: "100%",
              textAlign: "center",
              transition: "all .2s ease-in-out",
            }}
          >
            {title}
          </Typography>
        </HoverWrapper>
      </CardContent>
    </Card>
  );
};

export default CardElement;
