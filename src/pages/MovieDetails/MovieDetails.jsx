import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, Suspense, useState } from 'react';
import { StyledLink } from 'components/ui';
import { getMovieInfo } from 'api/fetchMovie';
import { MovieCard } from 'components/MovieCard';
import { MovieDetailsActions } from 'components/MovieDetailsActions';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const getMovie = async () => {
      const movie = await getMovieInfo(Number(movieId));
      setMovie(movie);
    };
    getMovie();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <div>
        <StyledLink to={backLinkHref}>Back to movies list</StyledLink>
        <MovieCard movie={movie} />
      </div>
      <div>
        <h3>Additional information</h3>
        <MovieDetailsActions movieId={movieId} backLinkHref={backLinkHref} />
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
