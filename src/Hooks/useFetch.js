import { useEffect, useState } from "react";

export const useFetch = (apiPath,query="") => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchController = new AbortController();
    const url = `https://api.themoviedb.org/3/${apiPath}?query=${query}`;
    // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${process.env.REACT_APP_ACCESS_KEY}`,
      },
    };
    async function fetchMovie() {
      setLoading(true)
      await fetch(url, options,{signal:fetchController.signal})
      // await fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json.results))
        .catch((err) => console.error("error:" + err));
        setLoading(false);
    }
    fetchMovie();
    return ()=>fetchController.abort();
  }, [apiPath,query]);

  return { data,Loading};
};
