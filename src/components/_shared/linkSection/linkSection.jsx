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
          designer. Check my experience in working in different set-ups and on
          different types of designs tasks.
        </p>
        <MainButton link="/casestudies" text="Show all" width="180px" />
      </div>
      <div className={s.item}>
        <h3>About me</h3>
        <p>
          Stuff that is not related to work. Here you can find more about my
          values, life goals, and interests that give me the motivation to do
          what I do every day.
        </p>
        <MainButton link="/about" text="Open page" width="180px" />
      </div>
      <div className={s.item}>
        <h3>Mentoring</h3>
        <p>
          This world is built on mutual help to each other. I like to help
          beginner designers. And this helps me to rethink some foundation
          bricks of my knowledge.
        </p>
        <MainButton link="/page/mentoring" text="Learn more" width="180px" />
      </div>
    </div>
  );
};

export default LinkSection;
