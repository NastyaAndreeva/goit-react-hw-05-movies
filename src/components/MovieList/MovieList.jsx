import { Link, useLocation } from 'react-router-dom';
import {
  MovieListStyled,
  CardWrapper,
} from 'components/MovieList/MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(({ id, title, overview, original_name }) => {
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <h2>{title ?? original_name}</h2>
              <p>{overview}</p>
            </Link>
          </CardWrapper>
        );
      })}
    </MovieListStyled>
  );
};
