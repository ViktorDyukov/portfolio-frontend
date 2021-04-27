import React, { useEffect, useState } from "react";
import axios from "axios";

let server = `http://${window.location.hostname}:8000`;
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
