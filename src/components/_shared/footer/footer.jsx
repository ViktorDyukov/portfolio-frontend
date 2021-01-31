import React, { Component } from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <a href="mailto:mail@dviktorducov.com">mail@dviktorducov.com</a>
      <a href="/about">About</a>
    </footer>
  );
};

export default Footer;
