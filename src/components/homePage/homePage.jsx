import React from "react";
import { Helmet } from "react-helmet";
import s from "./homePage.module.css";
import Hero from "./hero";
import Highlight from "./highlight";
import Links from "./links";
import { useParams } from "react-router";
import useApiRequest from "../_shared/api.jsx";

const HomePage = (props) => {
  let portLink = "/" + props.prefix + useParams().lid;

  // start - getting data
  const { data, error, isLoaded } = useApiRequest(
    "highlights",
    useParams().lid
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded || (Array.isArray(data) && !data.length)) {
    return <div></div>;
  }
  // end - getting data

  let hl_list = data.customisation.highlight.map((item) => (
    <Highlight
      prdX1={item.preview_deskX1}
      prdX2={item.preview_deskX2}
      key={item.id}
      id={item.id}
      portLink={portLink}
    />
  ));

  return (
    <div>
      <Helmet>
        <title>Home - Ducov</title>
      </Helmet>
      <Hero
        title={data.customisation.intro_header}
        description={data.customisation.intro_description}
      />
      {hl_list}
      <Links />
    </div>
  );
};

export default HomePage;
