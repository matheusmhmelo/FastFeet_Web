import styled from 'styled-components';
import searchIcon from '~/assets/search.png';

export const PageTitle = styled.h1`
  color: #444444;
  margin-bottom: 40px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 1150px;

  div {
    input {
      width: 280px;
      height: 36px;
      background: url(${searchIcon}) no-repeat center right 7px;
      border-radius: 4px;
      border: 1px solid #dddddd;
      padding-left: 10px;
      margin-right: 10px;

      &::placeholder {
        color: #999999;
      }
    }
  }
`;

export const NewContent = styled.button`
  width: 160px;
  height: 36px;
  border-radius: 4px;
  background: #7d40e7;
  color: #fff;
  display: flex;
  justify-content: center;

  span {
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
  }
`;
