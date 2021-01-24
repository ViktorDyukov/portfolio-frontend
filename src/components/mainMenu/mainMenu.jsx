import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./mainMenu.module.css";

const MainMenu = () => {
  return (
    <nav>
      <NavLink to="/portfolio" activeClassName={s.active}>
        Highlights
      </NavLink>
      <NavLink to="/projects" activeClassName={s.active}>
        Case Studies
      </NavLink>
      <NavLink to="/coaching" activeClassName={s.active}>
        Coaching
      </NavLink>
      <NavLink to="/about" activeClassName={s.active}>
        About me
      </NavLink>
      <NavLink to="/raw" activeClassName={s.active}>
        Raw
      </NavLink>
    </nav>
  );
};

export default MainMenu;
