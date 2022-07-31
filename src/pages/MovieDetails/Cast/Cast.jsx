import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieCredits } from 'api/fetchMovie';
import { CastList } from './CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const movieId = Number(location.state.id);
  useEffect(() => {
    const getMovie = async () => {
      const { cast } = await getMovieCredits(movieId);
      setCast(cast);
    };
    getMovie();
  }, [movieId]);

  return <CastList cast={cast} />;
};

export default Cast;
