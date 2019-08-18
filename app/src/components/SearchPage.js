import React, { Component } from 'react'
import Header from './Header'
import styled from 'styled-components'
import responsive from '../responsive'
import Search from './Search';
import history from '../helpers/history'


export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: localStorage['search'],
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
    this.handleSearchResult = this.handleSearchResult.bind(this)

  }

  componentDidMount() {
    if (window.location.href.split('/').pop() !== 'search') {
      // this.setState({ query: window.location.href.split('/').pop() })
      this.setState((state, props) => ({
        query: window.location.href.split('/').pop()
      }));

      console.log(this.state.query);
    }
    (async () => {
      try {
        const response = await fetch('https://foxstudio.site/api/v2/routes/search.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `search=${this.state.query}`,
          mode: 'cors'
        });
        if (response.ok) {
          this.setState({ searchResult: await response.json() });
          console.log(this.state.searchResult);
        }
      } catch (err) {
        throw err;
      }
    })();

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

<<<<<<< HEAD
  render() {
=======
  handleSearchResult(value) {
    this.setState({ searchResult: value });
  }
>>>>>>> 8a19047524cecfad9e026e6b61eedc0b7cb69137

  render() {
    const { query } = this.state
    return (
      <SearchWrapper>
        <Header backgroundImg='search' />
        <SearchContainer>
          <Search onHandleSearchResult={this.handleSearchResult} query={query} />
        </SearchContainer>
        <SearchResultContainer>
          {this.state.searchResult.length !== 0 ?
            this.state.searchResult.map((element, index) =>
              <SearchResult key={index}>
                <SearchTitleContainer>
                  <SearchResultTitle>Раздел: {element.table} / {element.title}</SearchResultTitle>
                </SearchTitleContainer>
                <SearchResultText>{element.description}{element.tariff}</SearchResultText>
              </SearchResult>
            )
            :
            <SearchResult>
              <SearchTitleContainer>
                <SearchResultTitle>Ничего не найдено</SearchResultTitle>
              </SearchTitleContainer>
            </SearchResult>
          }
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
  width: 100%;
  margin: 15px;
  margin-top: 100px;


  @media ${responsive.mobileS} {
    margin: 15px;
    margin-top: 55px;
  }
  @media ${responsive.tablet} {
    margin: 15px;
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
