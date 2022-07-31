import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar';
import { MovieList } from 'components/MovieList';
import { getMoviesBySearch } from 'api/fetchMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('search') ?? '';

  useEffect(() => {
    if (filmName === '') {
      return;
    }
    const getMovies = async () => {
      const response = await getMoviesBySearch(filmName);
      setMovies(response.results);
    };
    getMovies();
  }, [filmName]);

  const onSubmit = search => {
    setSearchParams(search);
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
