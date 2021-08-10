import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import useApiRequest from "../_shared/utilities/api.jsx";
import s from "./studyPage.module.css";
import InfoItem from "../_shared/infoItem/infoItem";
import Tags from "../_shared/tags/tags.jsx";
import SeparatorImg from "./separatorImg.jsx";

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
      <SeparatorImg
        imgX1={data.separatorImg_deskX1}
        imgX2={data.separatorImg_deskX2}
      />
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
