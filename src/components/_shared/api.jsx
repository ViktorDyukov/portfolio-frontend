import React, { useEffect, useState } from "react";
import axios from "axios";

let server = `https://${window.location.hostname}/api`;
export { server };

const useApiRequest = (key, id = "") => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const url = `${server}/${key}/${id}`;

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
