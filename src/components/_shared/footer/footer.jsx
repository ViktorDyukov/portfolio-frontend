import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <a href="mailto:mail@victorduco.com">mail@victorduco.com</a>
      <div className={s.smbuttons}>
        <a href="https://www.linkedin.com/in/victorducov/">LinkedIn</a>
        <a href="https://www.instagram.com/victorducov/">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
