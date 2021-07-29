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
      <div className={`all_pages_container ${s.content}`}>
        <h1>{data.title}</h1>
        {data.caseInfoSection.slice(0, 2).map((item) => (
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <ScrollTrigger
        start="center center"
        end="bottom center"
        pin={true}
        pinSpacing="margin"
        scrub={0.5}
      >
        <Timeline
          target={
            <div className={s.imgSeparator}>
              <img src="https://dummyimage.com/1200x600/00FF00/00FF00.png" />
            </div>
          }
        >
          <Tween
            to={{
              opacity: "1",
              scale: "0.75",
            }}
            duration={0.7}
            ease="Power2.easeIn"
          ></Tween>
        </Timeline>
      </ScrollTrigger>

      <div className={`all_pages_container ${s.content}`}>
        {data.caseInfoSection.slice(2).map((item) => (
          <InfoItem title={item.title} body={item.body} />
        ))}
        <InfoItem title="Designs" gallery="true" body={data.caseImage} />
      </div>
    </div>
  );
};

export default StudyPage;
