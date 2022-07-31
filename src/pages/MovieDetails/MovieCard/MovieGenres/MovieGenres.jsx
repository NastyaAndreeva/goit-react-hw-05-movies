import { MovieGenresStyled, MovieGenresItem } from './MovieGenres.styled';

export const MovieGenres = ({ genres }) => {
  return (
    <MovieGenresStyled>
      {genres.map(({ id, name }) => (
        <MovieGenresItem key={id}>{name}</MovieGenresItem>
      ))}
    </MovieGenresStyled>
  );
};
