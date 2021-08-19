import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <a href="mailto:mail@victorduco.com">mail@victorduco.com</a>
      <div className={s.smbuttons}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="www.linkedin.com/in/victorduco/"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/victorducov/"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
