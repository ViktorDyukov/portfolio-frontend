import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import s from "./homePage.module.css";
import Hero from "./hero";
import Highlight from "./highlight";
import LinkSection from "../_shared/linkSection/linkSection";
import { useParams } from "react-router";
import useApiRequest from "../_shared/utilities/api.jsx";
import getSubdomain from "../_shared/utilities/getSubdomain";

const HomePage = () => {
  // start - getting data
  const { data, error, isLoaded } = useApiRequest("highlights", getSubdomain());

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
      prsvg={item.preview_svg_deskX2}
      prBgPos={item.preview_bgposition}
      tags={item.tag}
      title={item.title}
      key={item.id}
      id={item.id}
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
      <LinkSection />
    </div>
  );
};

export default HomePage;
