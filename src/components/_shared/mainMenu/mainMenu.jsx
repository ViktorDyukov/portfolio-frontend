import React from "react";
import MainMenuItem from "./mainMenuItem";
import { useParams } from "react-router";
import getMenuData from "./getMenuData.js";
import getLogoName from "./getLogoName";
import s from "./mainMenu.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainMenu = (props) => {
  let portLink = "/" + props.prefix + useParams().lid;
  let portPth = props.pth;
  let mainMenuData = getMenuData();
  const menu = React.createRef();

  let mainMenuRes = mainMenuData.map((item) =>
    MainMenuItem(portLink + item.link, item.text)
  );
  const toggleMenu = () => {
    menu.current.classList.toggle(s.visible);
  };

  const logoName = getLogoName();
  let logo = logoName.map((item) => (
    <Route
      exact
      path={portPth + item.link}
      render={() => (
        <img src={process.env.PUBLIC_URL + `/icons/logos/${item.logo}.svg`} />
      )}
    ></Route>
  ));

  let logoRes = <Router>{logo}</Router>;

  // let logoName = (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/" render={() => "main"}></Route>
  //       <Route exact path={portPth} render={() => "main"}></Route>
  //       <Route
  //         exact
  //         path={portPth + "/casestudies/"}
  //         render={() => (
  //           <img src={process.env.PUBLIC_URL + `/icons/logos/allcases.svg`} />
  //         )}
  //       ></Route>
  //       <Route
  //         exact
  //         path={portPth + "/study/:id"}
  //         render={() => (
  //           <img src={process.env.PUBLIC_URL + `/icons/logos/allcases.svg`} />
  //         )}
  //       ></Route>
  //       <Route exact path={portPth + "/about"} render={() => "about"}></Route>
  //       <Route
  //         exact
  //         path={portPth + "/page/argumented-reality"}
  //         render={() => "ar"}
  //       ></Route>
  //       <Route
  //         exact
  //         path={portPth + "/page/argumented-reality"}
  //         render={() => "ar"}
  //       ></Route>
  //     </Switch>
  //   </Router>
  // );

  return (
    <nav className={s.root}>
      <div className={s.toggle} onClick={toggleMenu}>
        <img src={process.env.PUBLIC_URL + "/icons/menu.svg"} />
      </div>
      <a href={portLink} className={s.logo}>
        {logoRes}
      </a>
      <ul className={s.menu} ref={menu}>
        {mainMenuRes}
      </ul>
    </nav>
  );
};

export default MainMenu;
