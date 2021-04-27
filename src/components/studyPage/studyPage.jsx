import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import useApiRequest from "../_shared/api.jsx";
import s from "./studyPage.module.css";
import InfoItem from "../_shared/infoItem/infoItem";

const StudyPage = () => {
  let id = useParams().id;

  // start - getting data
  const { data, error, isLoaded, setData } = useApiRequest("case", id);

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded || (Array.isArray(data) && !data.length)) {
    return <div>loading</div>;
  }
  // end - getting data

  // content
  let contentRes = (
    <div className={`all_pages_container ${s.content}`}>
      <InfoItem title={data.c1_title} body={data.c1_body} />
      <InfoItem title={data.c2_title} body={data.c2_body} />
      <InfoItem title={data.c3_title} body={data.c3_body} />
      <InfoItem title={data.c4_title} body={data.c4_body} />
      <InfoItem title="Designs" gallery="true" body={data.caseImage} />
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>{`${data.title} - Ducov`}</title>
      </Helmet>
      <div className={s.root}></div>
      <div className={s.header} style={{ backgroundColor: data.bg_color }}>
        <div className={s.title}>
          <h1>{data.title}</h1>
        </div>
      </div>
      {contentRes}
    </div>
  );
};

export default StudyPage;
