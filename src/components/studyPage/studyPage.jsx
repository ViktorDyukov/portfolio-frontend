import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import useApiRequest from "../_shared/utilities/api.jsx";
import s from "./studyPage.module.css";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import InfoItem from "../_shared/infoItem/infoItem";
import Tags from "../_shared/tags/tags.jsx";
import ImgSet from "../_shared/imgSet/imgSet.jsx";

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
      <div className={`all_pages_container ${s.header}`}>
        <Tags list={data.tag} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>

      <ScrollTrigger
        start="top bottom"
        end="bottom center"
        pin={false}
        scrub={0.5}
      >
        <Timeline
          target={
            <div
              id="imgSeparator"
              className={s.imgSeparator}
              // style={{ backgroundColor: data.bg_color }}
            >
              <ImgSet
                imgX1={data.separatorImg_deskX1}
                imgX2={data.separatorImg_deskX2}
              />
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
