import React from "react";
import s from "./tags.module.css";

const Tags = (props) => {
  let op_class = "";
  if (props.small) {
    op_class = s.small;
  }
  let tags = props.list.map((item) => <div>{item.name}</div>);
  return <div className={`${s.root} ${op_class}`}>{tags}</div>;
};

export default Tags;
