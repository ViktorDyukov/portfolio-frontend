import React, { useEffect, useRef } from "react";
import s from "./highlight.module.css";
import { Link, NavLink } from "react-router-dom";
import { HideAt, ShowAt } from "react-with-breakpoints";
import ImgSet from "../_shared/imgSet/imgSet";
import { APIUrl } from "../_shared/utilities/api";
import MainButton from "../_shared/mainButton/mainButton";
import Tags from "../_shared/tags/tags";

// import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Item } from "react-photoswipe-gallery";

const Highlight = React.forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const root_desktop = useRef(null);
  const svg_desktop = useRef(null);
  const upper_mobile = useRef(null);

  useEffect(() => {
    gsap.from(root_desktop.current, {
      opacity: "0",
      scale: "0.9",
      ease: "power3.easeOut",
      scrollTrigger: {
        trigger: root_desktop.current,
        start: "top bottom",
        end: "bottom center",
        markers: true,
        scrub: 0.5,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(svg_desktop.current, {
      opacity: "-1",
      ease: " Expo.easeOut",
      scrollTrigger: {
        trigger: svg_desktop.current,
        start: "top bottom",
        end: "bottom center",
        // markers: true,
        scrub: 0.5,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(upper_mobile.current, {
      opacity: "0",
      scale: "1.1",
      ease: "power4.easeOut",
      scrollTrigger: {
        trigger: upper_mobile.current,
        start: "top bottom",
        end: "bottom center",
        markers: true,
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div>
      {/* ### */}
      {/* Desktop section */}

      <HideAt breakpoint="mediumAndBelow">
        <div className={s.root} ref={root_desktop}>
          <NavLink key={props.id} exact to={`/study/${props.id}/`}>
            <div className={s.hlbox}>
              <img
                ref={svg_desktop}
                src={`${APIUrl}${props.prsvg}`}
                className={s.svgimg}
              />
              <ImgSet imgX1={props.prdX1} imgX2={props.prdX2} />
            </div>
          </NavLink>
        </div>
      </HideAt>

      {/* ### */}
      {/* Mobile section */}

      <ShowAt breakpoint="mediumAndBelow">
        <Link
          to={`${window.location.host}/study/${props.id}/`}
          className={s.m_root}
        >
          <div
            className={s.upper}
            ref={upper_mobile}
            style={{
              backgroundImage: `url('${APIUrl}${props.prdX2}')`,
              backgroundPosition: `${props.prBgPos} 0%`,
            }}
          ></div>
          <div className={s.lower}>
            <h3>{props.title}</h3>
            <MainButton text="Open study" height="44px" />
          </div>
        </Link>
      </ShowAt>
    </div>
  );
});

export default Highlight;
