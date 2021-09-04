import React, { useLayoutEffect, useRef } from "react";
import s from "./separatorImg.module.css";
import ImgSet from "../_shared/imgSet/imgSet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SeparatorImg = ({ imgX1, imgX2 }) => {
  gsap.registerPlugin(ScrollTrigger);
  const separator = useRef(null);
  const all_markers = false;

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: separator.current,
        start: "top bottom",
        end: "bottom bottom",
        markers: all_markers,
        scrub: true,
      },
    });
    tl.fromTo(
      separator.current,
      {
        scale: "0.9",
        opacity: "0.1",
      },
      {
        scale: "1",
        opacity: "1",
        ease: "power3.easeOut",
      }
    );
  }, []);

  return (
    <div ref={separator} className={s.root}>
      <ImgSet imgX1={imgX1} imgX2={imgX2} />
    </div>
  );
};

export default SeparatorImg;
