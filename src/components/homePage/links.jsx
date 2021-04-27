import React from "react";
import s from "./links.module.css";

const Links = () => {
  return (
    <div className={s.root}>
      <div className={s.item}>
        <h3>All Projects</h3>
        <p>
          Enchansing IDT internal tools with the consistent employee experience.
          Vitya is a designer and art director who loves to craft a good story.
          I do FinTech design
        </p>
        <button>See all stuff</button>
      </div>
      <div className={s.item}>
        <h3>Who is Viktor</h3>
        <p>
          Enchansing IDT internal tools with the consistent employee experience.
          Vitya is a designer and art director who loves to craft a good story.
          I do FinTech design
        </p>
        <button>See all stuff</button>
      </div>
      <div className={s.item}>
        <h3>QA Section</h3>
        <p>
          Enchansing IDT internal tools with the consistent employee experience.
          Vitya is a designer and art director who loves to craft a good story.
          I do FinTech design
        </p>
        <button>See all stuff</button>
      </div>
    </div>
  );
};

export default Links;
