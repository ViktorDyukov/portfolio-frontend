import React from "react";
import s from "./hero.module.css";

const Hero = (props) => {
  return (
    <div className={s.root}>
      <div>
        <h1>{props.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
      </div>
    </div>
  );
};

export default Hero;
