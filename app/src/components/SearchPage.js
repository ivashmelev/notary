import React, { Component } from 'react'
import Header from './Header'
import styled from 'styled-components'
import responsive from '../responsive'
import Search from './Search';


export default class SearchPage extends Component {
  render() {
    return (
      <SearchWrapper>
        <Header backgroundImg='search' />
        <SearchContainer>
          <Search />
        </SearchContainer>
        <SearchResultContainer>
          <SearchResult>
            <SearchTitleContainer>
              <SearchResultSection></SearchResultSection>
              <SearchResultTitle></SearchResultTitle>/
              <SearchResultTitle></SearchResultTitle>
            </SearchTitleContainer>
            <SearchResultText></SearchResultText>
          </SearchResult>
        </SearchResultContainer>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 933px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  margin-top: 39px;
`;

const SearchResultContainer = styled.div``;
const SearchResult = styled.div``;
const SearchTitleContainer = styled.div``;
const SearchResultSection = styled.div``;
