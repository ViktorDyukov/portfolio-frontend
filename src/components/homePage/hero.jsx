import React, { Component, useEffect } from "react";
import s from "./hero.module.css";

const Hero = (props) => {
  return (
    <div className={s.root}>
      <div>
        <h1>{props.title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: props.description }}></h2>
      </div>
    </div>
  );
};

export default Hero;
