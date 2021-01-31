import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../../api.js";

const StudyPage = () => {
  let id = useParams().id;
  const [data, setData] = useState(0);
  useEffect(() => {
    getData(setData, "project", id);
  }, []);

  return (
    <div>
      {id} {JSON.stringify(data)}
    </div>
  );
};

export default StudyPage;
