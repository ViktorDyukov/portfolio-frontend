import React from "react";
import MainMenuItem from "./mainMenuItem";
import { useParams } from "react-router";
import getMenuData from "../utilities/getMenuData.js";
import getLogoName from "../utilities/getLogoName";
import s from "./mainMenu.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainMenu = () => {
  let mainMenuData = getMenuData();
  const menu = React.createRef();

  let mainMenuRes = mainMenuData.map((item) =>
    MainMenuItem(item.link, item.text)
  );
  const toggleMenu = () => {
    menu.current.classList.toggle(s.visible);
  };

  const logoName = getLogoName();
  let logo = logoName.map((item) => (
    <Route
      exact
      path={item.link}
      render={() => (
        <img src={process.env.PUBLIC_URL + `/icons/logos/${item.logo}.svg`} />
      )}
    ></Route>
  ));

  let logoRes = <Router>{logo}</Router>;

  return (
    <nav className={s.root}>
      <div className={s.toggle} onClick={toggleMenu}>
        <img src={process.env.PUBLIC_URL + "/icons/menu.svg"} />
      </div>
      <a href={"http://" + window.location.host} className={s.logo}>
        {logoRes}
      </a>
      <ul className={s.menu} ref={menu}>
        {mainMenuRes}
      </ul>
    </nav>
  );
};

export default MainMenu;
