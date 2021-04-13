import React, { Component, useEffect } from "react";
import s from "./highlight.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Highlight = (props) => {
  const publ = process.env.PUBLIC_URL;
  const img_x1 = `${publ}/tmpimg/${props.pid}@1x.png`;
  const img_x2 = `${publ}/tmpimg/${props.pid}@2x.png`;
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
      <Link to={`${props.portLink}/study/${props.pid}/`}>
        <div className={s.hlbox} ref={hl}>
          <img srcset={`${img_x1} 1x, ${img_x2} 2x,`} src={img_x1} />
        </div>
      </Link>
    </div>
  );
};

export default Highlight;
