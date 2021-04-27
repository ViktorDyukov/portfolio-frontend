import React from "react";
import s from "./infoItem.module.css";
import GalleryView from "../galleryView/galleryView";

const InfoItem = (props) => {
  if (props.gallery) {
    if (props.body) {
      if (props.body.length > 0) {
        return (
          <div className={s.item}>
            <div className={s.title}>{props.title}</div>
            <div className={s.body}>
              <GalleryView images={props.body} />
            </div>
          </div>
        );
      }
    }
  } else {
    return (
      <div className={s.item}>
        <div className={s.title}>{props.title}</div>
        <div className={s.body}>{props.body}</div>
      </div>
    );
  }
  return "";
};

export default InfoItem;
