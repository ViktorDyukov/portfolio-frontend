import React, { Component, useEffect } from "react";
import MainMenuItem from "./mainMenuItem";
import { useParams } from "react-router";
import getMenuData from "./getMenuData.js";
import s from "./mainMenu.module.css";

const MainMenu = (props) => {
  let portLink = "/" + props.prefix + useParams().lid;
  let mainMenuData = getMenuData();
  const menu = React.createRef();

  let mainMenuRes = mainMenuData.map((item) =>
    MainMenuItem(portLink + item.link, item.text)
  );
  const toggleMenu = () => {
    menu.current.classList.toggle(s.visible);
  };

  // useEffect(() => {
  //   toggle.addEventListener("click", function () {
  //     menu.classList.toggle("active");
  //   });
  // }, [MainMenu]);

  return (
    <nav className={s.root}>
      <div className={s.toggle} onClick={toggleMenu}>
        <img src={process.env.PUBLIC_URL + "/icons/menu.svg"} />
      </div>
      <a href="#" className={s.logo}>
        <img src={process.env.PUBLIC_URL + "/icons/logo.svg"} />
      </a>
      <ul className={s.menu} ref={menu}>
        {mainMenuRes}
      </ul>
    </nav>
  );
};

export default MainMenu;
