import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import useApiRequest from "../_shared/utilities/api.jsx";
import s from "./studyPage.module.css";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import InfoItem from "../_shared/infoItem/infoItem";

const StudyPage = () => {
  let id = useParams().id;

  // start - getting data
  const { data, error, isLoaded, setData } = useApiRequest("case", id);

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded || (Array.isArray(data) && !data.length)) {
    return <div></div>;
  }
  // end - getting data

  return (
    <div>
      <Helmet>
        <title>{`${data.title} - Ducov`}</title>
      </Helmet>

      <div className={s.root}></div>
      <div className={`all_pages_container ${s.header}`}>
        <div className={s.temp}>
          <div>Mobile</div>
          <div>FinTech</div>
          <div>Design system</div>
        </div>
        <h1>{data.title}</h1>
        <p>
          I joined the company right when Boosted was prepping to launch its 2nd
          Gen Board. We quickly teamed up with a design agency (Ueno) to create
          a landing page for collecting pre-orders. We listed out product specs,
          slapped on a handful of sexy product renders and pushed go. We listed
          out product specs, slapped on a handful of sexy product renders and
          pushed go. We listed out product specs, slapped on a handful of sexy
          product renders and pushed go.
        </p>
      </div>

      <ScrollTrigger
        start="top bottom"
        end="bottom center"
        pin={false}
        scrub={0.5}
      >
        <Timeline
          target={
            <div id="imgSeparator" className={s.imgSeparator}>
              <img src="https://dummyimage.com/1200x480/2222AA/AAAAAA.png" />
            </div>
          }
        >
          <Tween
            from={{
              scale: "0.9",
              opacity: "0.1",
            }}
            duration={1}
            ease="Power3.easeOut"
          ></Tween>
        </Timeline>
      </ScrollTrigger>

      <div className={`all_pages_container ${s.content}`}>
        {data.caseInfoSection.map((item) => (
          <InfoItem title={item.title} body={item.body} />
        ))}
        <InfoItem title="Designs" gallery="true" body={data.caseImage} />
      </div>
    </div>
  );
};

export default StudyPage;
