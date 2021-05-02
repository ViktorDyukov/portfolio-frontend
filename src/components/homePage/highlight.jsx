import React, { useEffect } from "react";
import s from "./highlight.module.css";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Link } from "react-router-dom";
import { server } from "../_shared/api.jsx";
import { HideAt, ShowAt } from "react-with-breakpoints";
import MainButton from "../_shared/mainButton/mainButton";

const Highlight = React.forwardRef((props, ref) => {
  let prdX1 = server + props.prdX1;
  let prdX2 = server + props.prdX2;

  return (
    <div>
      <HideAt breakpoint="mediumAndBelow">
        <ScrollTrigger start="top bottom" end="top 200px" scrub={0.5}>
          <Timeline
            target={
              <div className={s.root}>
                <Link to={`${props.portLink}/study/${props.id}/`}>
                  <div className={s.hlbox}>
                    <img srcSet={`${prdX1} 1x, ${prdX2} 2x,`} src={prdX1} />
                  </div>
                </Link>
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
                  to={`${props.portLink}/study/${props.id}/`}
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
