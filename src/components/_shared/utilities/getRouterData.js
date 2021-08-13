import HomePage from "../../homePage/homePage";
import StudyPage from "../../studyPage/studyPage";
import AllStudiesPage from "../../allStudiesPage/allStudiesPage";
import AboutPage from "../../aboutPage/aboutPage";
import TextPage from "../../textPage/textPage";
import NotFound from "../../notFound/notFound";

const routerData = [
  { path: "/", Component: HomePage },
  { path: "/casestudies/", Component: AllStudiesPage },
  { path: "/study/:id", Component: StudyPage },
  { path: "/about/", Component: AboutPage },
  { path: "/page/:purl", Component: TextPage },
  // { path: "*", Component: NotFound },
];

export default routerData;
