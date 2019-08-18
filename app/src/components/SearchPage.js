import React, { Component } from 'react'
import Header from './Header'
import styled from 'styled-components'
import responsive from '../responsive'
import Search from './Search';



export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResult: [{
        section: 'УСЛУГИ',
        title: 'Удостоверение сделок1',
        text: 'В случаях, указанных в законе (обязательная нотариальная форма сделок), или по соглашению сторон нотариусы удостоверяют сделки – действия граждан и юридических лиц, направленные на установление, изменение или прекращение гражданских прав и обязанностей (завещания, доверенности, договоры и т.д.). Нотариальное удостоверение сделки предполагает проверку нотариусом законности сделки, в том числе наличия у каждой из сторон права на ее совершение, соответствия содержания сделки действительным намерениям сторон.'
      },
      {
        section: 'УСЛУГИ',
        title: 'Удостоверение сделок2',
        text: 'В случаях, указанных в законе (обязательная нотариальная форма сделок), или по соглашению сторон нотариусы удостоверяют сделки – действия граждан и юридических лиц, направленные на установление, изменение или прекращение гражданских прав и обязанностей (завещания, доверенности, договоры и т.д.). Нотариальное удостоверение сделки предполагает проверку нотариусом законности сделки, в том числе наличия у каждой из сторон права на ее совершение, соответствия содержания сделки действительным намерениям сторон.'
      },
      {
        section: 'УСЛУГИ',
        title: 'Удостоверение сделок2',
        text: '123'
      }]
    }
  }

  componentDidMount() {
    if (window.location.href.split('/').pop() !== 'search') {
      this.setState({ query: window.location.href.split('/').pop()})
    }
    // (async () => {
    //   try {
    //     const response = await fetch('http://api.loc/api/v1/routes/search.php');
    //     if (await response.ok) {
    //       this.setState({ searchResult: await response.json() });
    //       console.log(this.state.searchResult);
    let cloneSearchResult = [...this.state.searchResult];
    cloneSearchResult.forEach((element, index) => {
      let arrText = element.text.split('');
      if (arrText.length - 1 > 323) {
        arrText.splice(323, arrText.length - 1, '...');
        element.text = arrText.join('');
      }
    });

    this.setState({ searchResult: cloneSearchResult });

    //     }
    //   } catch (err) {
    //     throw err;
    //   }
    // })();
  }

  render() {
    console.log(window.location.href.split('/').pop());
    

    const { query } = this.state
    return (
      <SearchWrapper>
        <Header backgroundImg='search' />
        <SearchContainer>
          <Search query={query}/>
        </SearchContainer>
        <SearchResultContainer>
          {this.state.searchResult.map((element, index) =>
            <SearchResult key={index}>
              <SearchTitleContainer>
                <SearchResultTitle>Раздел: {element.section} / {element.title}</SearchResultTitle>
              </SearchTitleContainer>
              <SearchResultText>{element.text}</SearchResultText>
            </SearchResult>
          )}
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
  max-width: 933px;
  width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  margin-top: 39px;

  @media ${responsive.mobileS} {
    margin-top: 0;
  }
`;

const SearchResultContainer = styled.div`
  max-width: 1172px;
  margin-top: 100px;

  @media ${responsive.mobileS} {
    margin-top: 55px;
  }
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 58px;

  @media ${responsive.mobileS} {
    margin: 15px;
    margin-bottom: 35px;
  }
`;

const SearchTitleContainer = styled.div`
  display: flex;
`;

const SearchResultTitle = styled.div`
  font-family: Montserrat Medium;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;

  &:hover{
    cursor: pointer;
  }
`;

const SearchResultText = styled.div`
  margin-top: 17px;
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;

  &:hover{
    cursor: pointer;
  }
`;
