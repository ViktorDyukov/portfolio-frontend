import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./global.css";
import HomePage from "./components/homePage/homePage";
import StudyPage from "./components/studyPage/studyPage";
import AllStudiesPage from "./components/allStudiesPage/allStudiesPage";
import AboutPage from "./components/aboutPage/aboutPage";
import TextPage from "./components/textPage/textPage";
import MainMenu from "./components/_shared/mainMenu/mainMenu";
import Footer from "./components/_shared/footer/footer";
import { BreakpointsProvider } from "react-with-breakpoints";

const breakpoints = {
  small: 468,
  medium: 560,
  large: 1024,
  xlarge: Infinity,
};

const App = () => {
  // const prefPortPath = "portfolio-";
  // const portPath = `/${prefPortPath}:lid([0-9a-fA-f]{3})`;

  const domains = window.location.host.split(".");
  var subDomain = "";
  if (domains.length >= 3) subDomain = domains[0];
  else subDomain = "public";
  console.log(process.env.NODE_ENV);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={() => <MainMenu key={window.location.pathname} />}
        ></Route>
      </Switch>
      <Switch>
        <Route
          exact
          path={"/"}
          render={() => <HomePage subDomain={subDomain} />}
        ></Route>
        <Route
          exact
          path={"/casestudies/"}
          render={() => <AllStudiesPage />}
        ></Route>
        <Route
          exact
          path={"/study/:id"}
          render={() => {
            return <StudyPage />;
          }}
        ></Route>
        <Route exact path={"/about/"} render={() => <AboutPage />}></Route>
        <Route
          exact
          path={"/page/:purl"}
          render={() => <TextPage key={window.location.pathname} />}
        ></Route>
      </Switch>
      <Switch>
        <Route path={"/"} render={() => <Footer />}></Route>
      </Switch>
    </Router>
  );
};

export default App;

ReactDOM.render(
  <BreakpointsProvider breakpoints={breakpoints}>
    <App />
  </BreakpointsProvider>,
  document.getElementById("root")
);
