import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import HomePage from "./components/homePage/homePage";
import ProjectPage from "./components/projectPage/projectPage";
import TextPage from "./components/textPage/textPage";
import ContactPage from "./components/contactPage/contactPage";
import AboutPage from "./components/aboutPage/aboutPage";
import Page404 from "./components/page404/page404";
import MainMenu from "./components/mainMenu/mainMenu";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainMenu}></Route>
        <Route path="/portfolio:cid" component={MainMenu}></Route>
      </Switch>

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/project/:id" component={ProjectPage}></Route>
        <Route exact path="/page/:id" component={TextPage}></Route>
        <Route exact path="/contact/" component={ContactPage}></Route>
        <Route exact path="/about/" component={AboutPage}></Route>
        <Route
          exact
          path="/portfolio:cid/project/:id"
          component={ProjectPage}
        ></Route>
        <Route
          exact
          path="/portfolio:cid/page/:id"
          component={TextPage}
        ></Route>
        <Route
          exact
          path="/portfolio:cid/contact/"
          component={ContactPage}
        ></Route>
        <Route exact path="/portfolio:cid/about/" component={AboutPage}></Route>

        <Route exact path="/portfolio:cid" component={HomePage}></Route>
        <Route component={Page404}></Route>
      </Switch>

      <Switch>
        <Route path="/" component={Footer}></Route>
        <Route path="/portfolio:cid" component={Footer}></Route>
      </Switch>
    </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
