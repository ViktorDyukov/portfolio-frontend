import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./mainMenu.module.css";

const MainMenuItem = (link, text) => {
  return (
    <NavLink exact to={link} activeClassName={s.active}>
      <li>{text}</li>
    </NavLink>
  );
};

export default MainMenuItem;
