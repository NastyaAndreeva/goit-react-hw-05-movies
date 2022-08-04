import styled from 'styled-components';

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
