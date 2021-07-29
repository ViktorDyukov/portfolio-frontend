import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudyPage from "./components/studyPage/studyPage";
import "./global.css";
import MainMenu from "./components/_shared/mainMenu/mainMenu";
import Footer from "./components/_shared/footer/footer";
import { BreakpointsProvider } from "react-with-breakpoints";
import routerData from "./components/_shared/utilities/getRouterData";

const breakpoints = {
  small: 468,
  medium: 560,
  large: 1024,
  xlarge: Infinity,
};

const App = () => {
  return (
    <Router>
      <Route
        path="/"
        render={() => <MainMenu key={window.location.pathname} />}
      ></Route>

      <div id="body_content" className="container">
        {routerData.map(({ path, Component }) => (
          <Route exact path={path} key={path}>
            <div className="page">
              <Component key={window.location.pathname} />
            </div>
          </Route>
        ))}
      </div>
      <Footer />
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
