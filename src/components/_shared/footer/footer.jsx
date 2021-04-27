import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <a href="mailto:mail@dviktorducov.com">mail@dviktorducov.com</a>
      <div className={s.smbuttons}>
        <a href="/about">LinkedIn</a>
        <a href="/about">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
