import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://cdn.contentful.com/spaces/6glkdf3annwq/entries?access_token=Jnkx10iYp0IcHRc1oSLDugcZtEKE1N2qdz_HEnKeeRU";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;