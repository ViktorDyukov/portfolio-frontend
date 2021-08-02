import React, { useEffect } from "react";
import s from "./highlight.module.css";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Link, NavLink } from "react-router-dom";
import { HideAt, ShowAt } from "react-with-breakpoints";
import ImgSet from "../_shared/imgSet/imgSet";
import { APIUrl } from "../_shared/utilities/api";

const Highlight = React.forwardRef((props, ref) => {
  return (
    <div>
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

      <ShowAt breakpoint="mediumAndBelow">
        <div>
          <ScrollTrigger
            start="top top"
            end="bottom -200px"
            pin={true}
            scrub={0.5}
          >
            <Timeline
              target={
                <Link
                  to={`${window.location.host}/study/${props.id}/`}
                  className={s.m_root}
                >
                  <div
                    className={s.upper}
                    style={{
                      backgroundImage: `url('${APIUrl}${props.prdX1}')`,
                    }}
                  ></div>
                  <div className={s.lower}>
                    <h3>
                      Validation of a P2P lending agregator business idea{" "}
                    </h3>
                    {/* <MainButton text="Open study" /> */}
                  </div>
                </Link>
              }
            >
              <Tween
                to={{
                  opacity: "0.75",
                  scale: "0.75",
                }}
                duration={1}
                ease="power4.inOut"
              ></Tween>
            </Timeline>
          </ScrollTrigger>
        </div>
      </ShowAt>
    </div>
  );
});

export default Highlight;
