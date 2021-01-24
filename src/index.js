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
import MainMenu from "./components/_sharedComponents/mainMenu/mainMenu";
import Footer from "./components/_sharedComponents/footer/footer";

const App = () => {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route exact path="/" render={() => <HomePage />}></Route>
        <Route exact path="/project/:id" render={() => <ProjectPage />}></Route>
        <Route exact path="/page/:id" render={() => <TextPage />}></Route>
        <Route exact path="/contact/" render={() => <ContactPage />}></Route>
        <Route exact path="/about/" render={() => <AboutPage />}></Route>
        {/* <Route
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
        <Route component={Page404}></Route> */}
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
