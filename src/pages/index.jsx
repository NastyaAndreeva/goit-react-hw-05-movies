import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'api/fetchMovie';
import { MovieList } from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovie().then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
