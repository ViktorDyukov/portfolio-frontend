import React, { useEffect, useState, useRef } from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { APIUrl } from "../utilities/api.jsx";
import s from "./galleryView.module.css";

const GalleryView = (props) => {
  let galleryItems = props.images.map((item) => (
    <Item
      className={s.item}
      original={APIUrl + item.imageX2}
      thumbnail={APIUrl + item.previewX1}
      width="1288"
      height="800"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={APIUrl + item.previewX1} />
      )}
    </Item>
  ));

  // <img ref={ref} onClick={open} src={APIUrl + item.previewX1 + ".webp"} />
  // original={APIUrl + item.imageX2 + ".webp"}
  // thumbnail={APIUrl + item.previewX1 + ".webp"}
  let galleryOptions = {
    preload: [3, 3],
    fullscreenEl: false,
    zoomEl: false,
    shareEl: false,
    tapToClose: true,
  };

  if (galleryItems.length > 0) {
    return (
      <div className={s.root}>
        <Gallery options={galleryOptions}>{galleryItems}</Gallery>
      </div>
    );
  } else return null;
};

export default GalleryView;
