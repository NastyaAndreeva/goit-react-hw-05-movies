import styled from 'styled-components';

export const MovieGenresStyled = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
`;

export const MovieGenresItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
