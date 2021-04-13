import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./global.css";

import HomePage from "./components/homePage/homePage";
import StudyPage from "./components/studyPage/studyPage";
import AllStudiesPage from "./components/allStudiesPage/allStudiesPage";
import AboutPage from "./components/aboutPage/aboutPage";
import MainMenu from "./components/_shared/mainMenu/mainMenu";
import Footer from "./components/_shared/footer/footer";

const App = () => {
  const prefPortPath = "portfolio-";
  const portPath = `/${prefPortPath}:lid([0-9a-fA-f]{3})`;
  return (
    <Router>
      <Switch>
        <Route
          path={portPath}
          render={() => <MainMenu prefix={prefPortPath} />}
        ></Route>
      </Switch>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <div>no portfolio link</div>;
          }}
        ></Route>
        <Route
          exact
          path={portPath}
          render={() => <HomePage prefix={prefPortPath} />}
        ></Route>
        <Route
          exact
          path={portPath + "/casestudies/"}
          render={() => <AllStudiesPage />}
        ></Route>
        <Route
          exact
          path={portPath + "/study/:id"}
          render={() => {
            return <StudyPage />;
          }}
        ></Route>
        <Route
          exact
          path={portPath + "/coaching/"}
          render={() => <AboutPage />}
        ></Route>
        <Route
          exact
          path={portPath + "/about/"}
          render={() => <AboutPage />}
        ></Route>
        <Route
          exact
          path={portPath + "/raw/"}
          render={() => <AboutPage />}
        ></Route>
      </Switch>
      <Switch>
        <Route path={portPath} render={() => <Footer />}></Route>
      </Switch>
    </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
