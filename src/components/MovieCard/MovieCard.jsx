import { IMG_URL } from 'constants';
import {
  MovieCardWrapper,
  MovieCardInfo,
  MovieCardImg,
} from './MovieCard.styled';
import { MovieGenres } from './MovieGenres';

export const MovieCard = ({ movie }) => {
  const { title, release_date, vote_average, overview, genres, backdrop_path } =
    movie;

  return (
    <MovieCardWrapper>
      <MovieCardImg
        src={`${IMG_URL}${backdrop_path}`}
        alt={`${title}`}
        width="400"
        height="300"
      />
      <MovieCardInfo>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User score: {Math.floor(vote_average * 10)}%</p>

        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <MovieGenres genres={genres} />
      </MovieCardInfo>
    </MovieCardWrapper>
  );
};
