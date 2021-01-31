import React, { Component, useEffect } from "react";
import s from "./highlight.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlight = (props) => {
  const hl = React.createRef();

  useEffect(() => {
    const t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: hl.current,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none reverse none",
        },
      })
      .from(hl.current, {
        opacity: "0.5",
        duration: "1.5",
        ease: "power2.inOut",
      })
      .from(
        hl.current,
        {
          duration: "1",
          scale: "0.97",
          ease: "power2.inOut",
        },
        "-=1.5"
      );
  }, [hl]);

  return (
    <div className={s.root}>
      <div className={s.hlbox} ref={hl}></div>
    </div>
  );
};

export default Highlight;
