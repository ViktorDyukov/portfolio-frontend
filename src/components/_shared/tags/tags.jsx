import React from "react";
import s from "./tags.module.css";

const Tags = (props) => {
  let tags = props.list.map((item) => <div>{item.name}</div>);
  return <div className={s.root}>{tags}</div>;
};

export default Tags;
