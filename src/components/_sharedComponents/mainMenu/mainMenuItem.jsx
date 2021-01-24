import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./mainMenu.module.css";

const MainMenuItem = (link, text) => {
  return (
    <NavLink to={link} activeClassName={s.active}>
      {text}
    </NavLink>
  );
};

export default MainMenuItem;
