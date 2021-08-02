import React, { useEffect } from "react";
import s from "./highlight.module.css";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Link, NavLink } from "react-router-dom";
import { HideAt, ShowAt } from "react-with-breakpoints";
import ImgSet from "../_shared/imgSet/imgSet";
import { APIUrl } from "../_shared/utilities/api";
import MainButton from "../_shared/mainButton/mainButton";
import Tags from "../_shared/tags/tags";

const Highlight = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* ### */}
      {/* Desktop section */}

      <HideAt breakpoint="mediumAndBelow">
        <ScrollTrigger
          start="top bottom"
          end="bottom center"
          scrub={0.5}
          // markers={true}
        >
          <Timeline
            target={
              <div className={s.root}>
                <NavLink key={props.id} exact to={`/study/${props.id}/`}>
                  <div className={s.hlbox}>
                    <img src={`${APIUrl}${props.prsvg}`} className={s.svgimg} />
                    <ImgSet imgX1={props.prdX1} imgX2={props.prdX2} />
                  </div>
                </NavLink>
              </div>
            }
          >
            <Tween
              from={{
                opacity: "0",
                scale: "0.9",
              }}
              duration={1}
              ease="Power3.easeOut"
            ></Tween>
          </Timeline>
        </ScrollTrigger>
      </HideAt>

      {/* ### */}
      {/* Mobile section */}

      <ShowAt breakpoint="mediumAndBelow">
        <Link
          to={`${window.location.host}/study/${props.id}/`}
          className={s.m_root}
        >
          <ScrollTrigger
            start="top bottom"
            end="bottom center"
            pin={false}
            scrub={0.5}
          >
            <Timeline
              target={
                <div
                  className={s.upper}
                  style={{
                    backgroundImage: `url('${APIUrl}${props.prdX1}')`,
                  }}
                ></div>
              }
            >
              <Tween
                from={{
                  opacity: "0",
                  scale: "1.1",
                }}
                duration={1}
                ease="power4.easeOut"
              ></Tween>
            </Timeline>
          </ScrollTrigger>
          <div className={s.lower}>
            {/* <Tags list={props.tags} small /> */}
            <h3>Validation of a P2P lending agregator business idea </h3>
            <MainButton text="Open study" height="44px" />
          </div>
        </Link>
      </ShowAt>
    </div>
  );
});

export default Highlight;
