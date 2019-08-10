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
              <SearchResultSection>Раздел:</SearchResultSection>
              <SearchResultTitle>УСЛУГИ / </SearchResultTitle>
              <SearchResultTitle>Удостоверение сделок</SearchResultTitle>
            </SearchTitleContainer>
            <SearchResultText>В случаях, указанных в законе (обязательная нотариальная форма сделок), или по соглашению сторон нотариусы удостоверяют сделки – действия граждан и юридических лиц, направленные на установление, изменение или прекращение гражданских прав и обязанностей (завещания, доверенности, договоры и т.д.). Нотариальное удостоверение сделки предполагает проверку нотариусом законности сделки, в том числе наличия у каждой из сторон права на ее совершение, соответствия содержания сделки действительным намерениям сторон.</SearchResultText>
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
const SearchResultTitle = styled.div``;
const SearchResultText = styled.div``;
