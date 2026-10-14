import { useEffect, useState } from "react";
import axios from "axios";

const useCharacters = (category) => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    axios
      .get("/characters.json")
      .then((res) => {
        if (!cancelled) {
          setChars(res.data.categories?.[category] || []);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [category]);

  return { chars, loading, error };
};

export default useCharacters;
