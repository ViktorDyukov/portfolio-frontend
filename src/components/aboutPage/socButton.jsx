import React from "react";
import s from "./socButton.module.css";

const SocButton = (props) => {
  return (
    <div className={s.root}>
      <a target="_blank" rel="noopener noreferrer" href={props.link}>
        <div className={s.linkcontainer}>
          <img className={s.icon} src={props.icon} height="28" width="28" />
          <div>{props.text}</div>
        </div>
      </a>
    </div>
  );
};

export default SocButton;
