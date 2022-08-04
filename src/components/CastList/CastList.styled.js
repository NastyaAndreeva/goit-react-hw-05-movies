import styled from 'styled-components';

export const CastListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const CastItem = styled.li`
  flex-basis: 25%;
`;

export const CastImgProfile = styled.img`
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 5px 8px 13px 3px rgba(0, 0, 0, 0.85);
`;
