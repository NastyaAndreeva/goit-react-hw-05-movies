import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, Suspense, useState } from 'react';
import { StyledLink, AdditionalInfoList } from './MovieDetails.styled';
import { getMovieInfo } from 'api/fetchMovie';
import { MovieCard } from './MovieCard';

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
        <AdditionalInfoList>
          <li>
            <Link to="cast" state={{ id: movieId, from: backLinkHref }}>
              Read about our cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ id: movieId, from: backLinkHref }}>
              Get to know the reviews
            </Link>
          </li>
        </AdditionalInfoList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
