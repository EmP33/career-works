import React from "react";
import CSSModules from "react-css-modules";
import styles from "./ListElement.module.scss";

import { useNavigate } from "react-router-dom";

const ListElement = ({ title, description, link }) => {
  const navigate = useNavigate();

  return (
    <li styleName="quote" onClick={() => navigate(`/${link}`)}>
      <h3>{title}</h3>
      <h6>{description}</h6>
    </li>
  );
};

export default CSSModules(ListElement, styles);
