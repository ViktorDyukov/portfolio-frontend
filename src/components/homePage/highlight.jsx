import React, { useEffect } from "react";
import s from "./highlight.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { server } from "../_shared/api.jsx";

gsap.registerPlugin(ScrollTrigger);

const Highlight = (props) => {
  let prdX1 = server + props.prdX1;
  let prdX2 = server + props.prdX2;
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
      <Link to={`${props.portLink}/study/${props.id}/`}>
        <div className={s.hlbox} ref={hl}>
          <img srcSet={`${prdX1} 1x, ${prdX2} 2x,`} src={prdX1} />
        </div>
      </Link>
    </div>
  );
};

export default Highlight;
