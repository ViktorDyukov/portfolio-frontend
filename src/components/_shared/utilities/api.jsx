import React, { useEffect, useState } from "react";
import axios from "axios";

const APIUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_BASE_URL
    : process.env.REACT_APP_DEV_BASE_URL;
export { APIUrl };

const useApiRequest = (key, id = "") => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const url = `${APIUrl}/api/${key}/${id}`;
  console.log(url);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setIsLoaded(true);
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [url]);

  return { error, isLoaded, data, setData };
};

export default useApiRequest;
