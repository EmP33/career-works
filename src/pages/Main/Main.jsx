import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Main.module.scss";

import ListElement from "../../components/ListElement/ListElement";

const Main = () => {
  return (
    <main styleName="app">
      <h1 className="main-header">React-Projects by Emp33</h1>
      <ul styleName="app__list">
        <ListElement
          title="Quote Generator"
          description="Generate random Quote"
        />
        <ListElement
          title="Infinity Scroll"
          description="Fetch pictures during scrolling"
        />
        <ListElement title="Picture In Picture" description="Detached screen" />
        <ListElement
          title="Light and Dark Mode"
          description="Switch between dark and light mode"
        />
      </ul>
    </main>
  );
};

export default CSSModules(Main, styles);
