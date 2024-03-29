import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import s from "./textPage.module.css";
import { useParams } from "react-router";
import useApiRequest from "../_shared/utilities/api.jsx";
import NotFound from "../notFound/notFound.jsx";

const TextPage = (props) => {
  let purl = useParams().purl;

  // start - getting data
  const { data, error, isLoaded, setData } = useApiRequest("page", purl);

  if (error !== null) {
    return <NotFound type="studyPage" />;
  }
  if (!isLoaded || (Array.isArray(data) && !data.length)) {
    return <div></div>;
  }
  // end - getting data

  return (
    <div className={`${s.root} all_pages_container`}>
      <Helmet>
        <title>{`${data.title} - Ducov`}</title>
      </Helmet>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </div>
  );
};
export default TextPage;
