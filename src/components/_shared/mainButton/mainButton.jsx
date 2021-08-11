import React from "react";
import s from "./mainButton.module.css";

const MainButton = (props) => {
  let button_height = "44px";
  let button_width = "100%";
  if (props.height) {
    button_height = props.height;
  }
  if (props.width) {
    button_width = props.width;
  }

  return (
    <a href={props.link}>
      <div
        className={s.root}
        style={{ width: button_width, height: button_height }}
      >
        <div>{props.text}</div>
        <img src={process.env.PUBLIC_URL + `/icons/button_arrow.svg`} />
      </div>
    </a>
  );
};

export default MainButton;
