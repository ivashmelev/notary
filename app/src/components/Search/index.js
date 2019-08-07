import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import searchIco from '../../assets/img/search.png'

export default class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <SearchInput type='text' name='search' placeholder='ПОИСК ПО САЙТУ' />
        <SearchButton></SearchButton>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  display: flex;
  max-width: 720px;
  height: 80px;
  position: relative;
`;

const SearchInput = styled.input`
  font-family: Montserrat Regular;
  font-size: 16px;
  padding: 30px 26px; 
  color: #000000;
  width: 100%;
  outline: none;
`;

const SearchButton = styled.button`
  width: 80px;
  height: 80px;
  background: #E6B980;
  background-image: url(${searchIco});
  box-sizing: border-box;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
`;
