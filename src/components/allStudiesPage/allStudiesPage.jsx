import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import useApiRequest from "../_shared/utilities/api.jsx";
import Highlight from "../homePage/highlight";
import LinkSection from "../_shared/linkSection/linkSection";
import s from "./allStudiesPage.module.css";
import FilterLink from "./filterLink";
import getSubdomain from "../_shared/utilities/getSubdomain";

const AllStudiesPage = (props) => {
  let [origData, setOrigData] = useState([]);
  let [activeFilter, setActiveFilter] = useState([-1]);

  let filterItems = [
    { name: "All studies", id: -1 },
    { name: "FinTech", id: 1 },
    { name: "MedTech", id: 2 },
    { name: "Design System", id: 3 },
    { name: "Mobile", id: 4 },
    { name: "User Research", id: 5 },
  ];

  // start - getting data
  const { data, error, isLoaded, setData } = useApiRequest(
    "cases",
    getSubdomain()
  );

  useEffect(() => {
    if (origData == 0) {
      setOrigData(data);
    }
  }, [data]);

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded || !data.length) {
    return <div></div>;
  }
  // end - getting data

  // all studies
  let hl_list = data.map((item) => (
    <Highlight
      prdX1={item.preview_deskX1}
      prdX2={item.preview_deskX2}
      prsvg={item.preview_svg_deskX2}
      key={item.id}
      id={item.id}
    />
  ));

  // start - FILTERS

  let hl_filter = filterItems.map((item) => {
    let active = false;
    if (activeFilter == item.id) {
      active = true;
    }
    return (
      <FilterLink
        onClick={() => filterUpdate(item.id)}
        name={item.name}
        active={active}
      />
    );
  });

  const filterArray = (key) => {
    return function (item) {
      let tagarr = item.tag;
      let res = false;
      for (var i = 0; i < tagarr.length; i++) {
        if (tagarr[i].id === key) {
          res = true;
        }
      }
      return res;
    };
  };

  const filterUpdate = (key) => {
    if (key !== -1) {
      setData(origData.filter(filterArray(key)));
      setActiveFilter(key);
    } else {
      setData(origData);
      setActiveFilter(key);
    }
  };

  // end - FILTERS

  return (
    <div className={s.root}>
      <Helmet>
        <title>Case Studies - Ducov</title>
      </Helmet>
      <div className={`all_pages_container ${s.title}`}>
        <h1>Case Studies</h1>

        <div className={s.filterlinks}>{hl_filter}</div>
      </div>
      {hl_list}
      <LinkSection />
    </div>
  );
};

export default AllStudiesPage;
