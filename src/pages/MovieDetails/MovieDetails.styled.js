import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  a {
    text-decoration: none;
  }
  li {
    margin-right: 10px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.searchBarBgc};
  }
`;
