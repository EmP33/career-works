import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Main.module.scss";

import ListElement from "../../components/ListElement/ListElement";

const Main = () => {
  return (
    <main styleName="app">
      <h1 className="main-header">React-Components by Emp33</h1>
      <ul styleName="app__list">
        <ListElement />
      </ul>
    </main>
  );
};

export default CSSModules(Main, styles);
