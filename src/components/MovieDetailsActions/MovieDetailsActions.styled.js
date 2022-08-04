import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsActionsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const MovieDetailsActionsLink = styled(Link)`
  text-decoration: none;
`;

export const MovieDetailsActionsItem = styled.li`
  margin-right: 10px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.searchBarBgc};
`;
