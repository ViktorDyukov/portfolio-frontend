import React, { useEffect, useRef, useState } from "react";
import s from "./highlight.module.css";
import { Link, NavLink } from "react-router-dom";
import { HideAt, ShowAt } from "react-with-breakpoints";
import ImgSet from "../_shared/imgSet/imgSet";
import { APIUrl } from "../_shared/utilities/api";
import MainButton from "../_shared/mainButton/mainButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Highlight = React.forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const root_desktop = useRef(null);
  const svg_desktop = useRef(null);
  const upper_mobile = useRef(null);
  const all_markers = false;

  useEffect(() => {
    console.log(root_desktop.current);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: root_desktop.current,
        start: "top bottom",
        end: "bottom bottom",
        markers: all_markers,
        scrub: 1,
      },
    });

    tl.fromTo(
      root_desktop.current,
      {
        opacity: "0",
        scale: "0.9",
      },
      {
        opacity: "1",
        scale: "1",
        ease: "power3.easeOut",
      }
    ).fromTo(
      svg_desktop.current,
      {
        opacity: "-1",
      },
      {
        opacity: "1",
        ease: "expo.easeOut",
      },
      "<"
    );
  }, []);

  useEffect(() => {
    let tlm = gsap.timeline({
      scrollTrigger: {
        trigger: upper_mobile.current,
        start: "top bottom",
        end: "bottom bottom",
        markers: all_markers,
        scrub: 1,
      },
    });

    tlm.fromTo(
      upper_mobile.current,
      {
        opacity: "0",
        scale: "1.1",
      },
      {
        opacity: "1",
        scale: "1",
        ease: "power4.easeOut",
      }
    );
  }, []);

  return (
    <div>
      {/* ### */}
      {/* Desktop section */}

      <HideAt breakpoint="mediumAndBelow">
        <div className={s.root} ref={root_desktop}>
          <NavLink key={props.id} exact to={`/study/${props.id}/`}>
            <div className={s.hlbox}>
              <div ref={svg_desktop}>
                <img src={`${APIUrl}${props.prsvg}`} className={s.svgimg} />
              </div>
              <ImgSet imgX1={props.prdX1} imgX2={props.prdX2} />
            </div>
          </NavLink>
        </div>
      </HideAt>

      {/* ### */}
      {/* Mobile section */}

      <ShowAt breakpoint="mediumAndBelow">
        <Link to={`/study/${props.id}/`} className={s.m_root}>
          <div
            className={s.upper}
            ref={upper_mobile}
            style={{
              backgroundImage: `url('${APIUrl}${props.prmX2}')`,
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
