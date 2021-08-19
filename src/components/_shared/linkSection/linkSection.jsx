import React from "react";
import s from "./linkSection.module.css";
import MainButton from "../mainButton/mainButton";

const LinkSection = () => {
  return (
    <div className={s.root}>
      <div className={s.item}>
        <h3>All Studies</h3>
        <p>
          I believe that flexibility is one of the main skills for a UX
          designer. Check out my experience in working in different set-ups and
          on different types of design tasks.
        </p>
        <MainButton link="/casestudies" text="Show all" width="180px" />
      </div>
      <div className={s.item}>
        <h3>About me</h3>
        <p>
          Not related to work. Here you can find more about my values, life
          goals, and interests that give me the motivation to do what I do every
          day.
        </p>
        <MainButton link="/about" text="Open page" width="180px" />
      </div>
      <div className={s.item}>
        <h3>Deliverables</h3>
        <p>
          Here you can find some examples of deliverables I’ve made to represent
          findings, improve my work visibility, and be on the same page with the
          team.
        </p>
        <MainButton link="/page/deliverables" text="Learn more" width="180px" />
      </div>
    </div>
  );
};

export default LinkSection;
