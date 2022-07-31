import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;

  > a {
    text-decoration: none;
  }
`;
