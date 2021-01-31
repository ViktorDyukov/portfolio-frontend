import React, { Component, useEffect } from "react";
import s from "./homePage.module.css";
import Hero from "./hero";
import Highlight from "./highlight";
import Links from "./links";

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Customer’ trust is key of FinTech product success"
        description="I’m a designer who has an extensive experience in <strong>FinTech</strong>. With all these years in the domain, I know how to create the <strong>solid relationship</strong> between the business and customers."
      />
      <Highlight pid="3" />
      <Highlight pid="2" />
      <Highlight pid="10" />
      <Links />
    </div>
  );
};

export default HomePage;
