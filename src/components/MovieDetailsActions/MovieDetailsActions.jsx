import {
  MovieDetailsActionsList,
  MovieDetailsActionsItem,
  MovieDetailsActionsLink,
} from './MovieDetailsActions.styled';

export const MovieDetailsActions = ({ movieId, backLinkHref }) => {
  return (
    <MovieDetailsActionsList>
      <MovieDetailsActionsItem>
        <MovieDetailsActionsLink
          to="cast"
          state={{ id: movieId, from: backLinkHref }}
        >
          Read about our cast
        </MovieDetailsActionsLink>
      </MovieDetailsActionsItem>
      <MovieDetailsActionsItem>
        <MovieDetailsActionsLink
          to="reviews"
          state={{ id: movieId, from: backLinkHref }}
        >
          Get to know the reviews
        </MovieDetailsActionsLink>
      </MovieDetailsActionsItem>
    </MovieDetailsActionsList>
  );
};
