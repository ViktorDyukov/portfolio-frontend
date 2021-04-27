import React from "react";
import s from "./filterLink.module.css";

const FilterLink = (props) => {
  let onClick = props.onClick;
  let actClass = s.nonactive;
  if (props.active) actClass = s.active;
  return (
    <div className={`${s.root} ${actClass}`}>
      <button onClick={onClick}>{props.name}</button>
      <div className={s.dot}> </div>
    </div>
  );
};

export default FilterLink;
