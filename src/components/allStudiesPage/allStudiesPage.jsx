import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../../api.js";

const AllStudiesPage = () => {
  let id = useParams().id;
  const [data, setData] = useState(0);
  useEffect(() => {
    getData(setData, "projects");
  }, []);

  return (
    <div>
      {id} {JSON.stringify(data)}
    </div>
  );
};

export default AllStudiesPage;
