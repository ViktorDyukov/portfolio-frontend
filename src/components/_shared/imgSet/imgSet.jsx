import React from "react";
import { APIUrl } from "../utilities/api";

const ImgSet = ({ imgX1, imgX2 }) => {
  return (
    <picture>
      <source
        srcSet={`${APIUrl}${imgX1}.webp 1x, ${APIUrl}${imgX2}.webp 2x`}
        type="image/webp"
      />
      <source
        srcSet={`${APIUrl}${imgX1} 1x, ${APIUrl}${imgX2} 2x`}
        type="image/png"
      />
      <img />
    </picture>
  );
};

export default ImgSet;
