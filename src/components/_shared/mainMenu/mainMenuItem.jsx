import React from "react";
import { NavLink } from "react-router-dom";
import s from "./mainMenu.module.css";

const MainMenuItem = (link, text) => {
  return (
    <NavLink key={link} exact to={link} activeClassName={s.active}>
      <li key={link}>{text}</li>
    </NavLink>
  );
};

export default MainMenuItem;
