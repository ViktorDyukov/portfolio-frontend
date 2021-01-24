import React, { Component } from "react";
import MainMenuItem from "./mainMenuItem";

const MainMenu = () => {
  let mainMenuData = [
    { link: "/portfolio", text: "Highlights" },
    { link: "/projects", text: "Case Studies" },
    { link: "/coaching", text: "Coaching" },
    { link: "/about", text: "About me" },
    { link: "/raw", text: "Raw" },
  ];

  let mainMenuRes = mainMenuData.map((item) =>
    MainMenuItem(item.link, item.text)
  );

  return <nav>{mainMenuRes}</nav>;
};

export default MainMenu;
