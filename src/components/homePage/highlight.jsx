import React, { useEffect } from "react";
import s from "./highlight.module.css";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Link, NavLink } from "react-router-dom";
import { HideAt, ShowAt } from "react-with-breakpoints";
import ImgSet from "../_shared/imgSet/imgSet";

const Highlight = React.forwardRef((props, ref) => {
  return (
    <div>
      <HideAt breakpoint="mediumAndBelow">
        <ScrollTrigger start="top bottom" end="top 200px" scrub={0.5}>
          <Timeline
            target={
              <div className={s.root}>
                <NavLink key={props.id} exact to={`/study/${props.id}/`}>
                  <div className={s.hlbox}>
                    <ImgSet imgX1={props.prdX1} imgX2={props.prdX2} />
                  </div>
                </NavLink>
              </div>
            }
          >
            <Tween
              from={{
                opacity: "0.2",
                scale: "0.98",
              }}
              duration={1.5}
              ease="power2.inOut"
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
                  <div className={s.upper}></div>
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
