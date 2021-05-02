import React from "react";
import s from "./mainButton.module.css";

const MainButton = (props) => {
  let button_width = "100%";
  if (props.width) {
    button_width = props.width;
  }
  return (
    <button className={s.root} style={{ width: button_width }}>
      {props.text}
    </button>
  );
};

export default MainButton;
