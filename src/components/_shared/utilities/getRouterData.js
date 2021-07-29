import HomePage from "../../homePage/homePage";
import StudyPage from "../../studyPage/studyPage";
import AllStudiesPage from "../../allStudiesPage/allStudiesPage";
import AboutPage from "../../aboutPage/aboutPage";
import TextPage from "../../textPage/textPage";

const routerData = [
  { path: "/", Component: HomePage },
  { path: "/casestudies/", Component: AllStudiesPage },
  { path: "/study/:id", Component: StudyPage },
  { path: "/about/", Component: AboutPage },
  { path: "/page/:purl", Component: TextPage },
];

export default routerData;
