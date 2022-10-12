import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  //states for movies and loading
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const { data } = await axios.get(url);

      const { results } = data;

      setMovies(results);
      setLoading(false);
    };
    fetchMovies();
  }, [url]);

  return [movies, loading];
};

export default useAxios;
