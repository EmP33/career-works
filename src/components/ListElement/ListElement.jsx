import React from "react";
import CSSModules from "react-css-modules";
import styles from "./ListElement.module.scss";

const ListElement = ({ title, description }) => {
  return (
    <li styleName="quote">
      <h3>{title}</h3>
      <h6>{description}</h6>
    </li>
  );
};

export default CSSModules(ListElement, styles);
