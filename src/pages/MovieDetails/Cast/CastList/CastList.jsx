import { CastListStyled, CastItem, CastImgProfile } from './CastList.styled';
import { IMG_URL } from 'constants';

export const CastList = ({ cast }) => {
  return (
    <CastListStyled>
      {cast.slice(0, 19).map(({ id, name, profile_path, character }) => (
        <CastItem key={id}>
          <p>{name}</p>

          <CastImgProfile
            src={
              profile_path
                ? `${IMG_URL + profile_path}`
                : 'https://avatars.githubusercontent.com/u/11584713?v=4'
            }
            alt="cast"
            width="150"
            height="200"
          />
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastListStyled>
  );
};
