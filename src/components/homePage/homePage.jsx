import React, { Component, useEffect } from "react";
import s from "./homePage.module.css";
import Hero from "./hero";
import Highlight from "./highlight";
import Links from "./links";
import { useParams } from "react-router";

const HomePage = (props) => {
  let portLink = "/" + props.prefix + useParams().lid;
  return (
    <div>
      <Hero
        title="Customer’ trust is key of FinTech product success"
        description="I’m a designer who has an extensive experience in <strong>FinTech</strong>. With all these years in the domain, I know how to create the <strong>solid relationship</strong> between the business and customers."
      />
      <Highlight pid="1" portLink={portLink} />
      <Highlight pid="2" portLink={portLink} />
      <Highlight pid="3" portLink={portLink} />
      <Highlight pid="4" portLink={portLink} />
      <Highlight pid="5" portLink={portLink} />
      <Highlight pid="6" portLink={portLink} />
      <Highlight pid="7" portLink={portLink} />
      <Highlight pid="8" portLink={portLink} />
      <Highlight pid="9" portLink={portLink} />
      <Highlight pid="10" portLink={portLink} />
      <Highlight pid="11" portLink={portLink} />
      <Highlight pid="12" portLink={portLink} />
      <Highlight pid="13" portLink={portLink} />
      <Highlight pid="14" portLink={portLink} />
      <Links />
    </div>
  );
};

export default HomePage;
