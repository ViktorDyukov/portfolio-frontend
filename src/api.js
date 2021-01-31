function getData(setData, section, id = null) {
  const server = "http://127.0.0.1:8000/";
  const state = {
    error: null,
    result: [],
  };

  let fetchUrl;
  if (id) {
    fetchUrl = server + `${section}/${id}`;
  } else {
    fetchUrl = server + `${section}/`;
  }

  fetch(fetchUrl)
    .then((response) => response.json())
    .then(
      (result) => {
        setData(result);
      },
      (error) => {
        setData(error.message);
      }
    );
}

export default getData;
