import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Hero from "../homePage/hero";
import s from "./notFound.module.css";

const NotFound = (props) => {
  return (
    <div className={`${s.root}`}>
      <Helmet>
        <title>{`404 - Ducov`}</title>
        <meta name="keywords" description="error" />
      </Helmet>

      <Hero
        title="Page not found"
        description="Sorry, this page isn't available. You can go to <a href='/'>Home Page</a>, 
        check <a href='/casestudies'>Cases Studies</a> I worked on, or learn a bit more about me <a href='/about'>here</a>."
      />
    </div>
  );
};
export default NotFound;
