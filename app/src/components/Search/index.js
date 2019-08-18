import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import searchIco from '../../assets/img/search.png'
import history from '../../helpers/history'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)

  }
  componentDidMount() {
    if (this.props.query) {
      this.setState({ query: this.props.query })
    }
  }
  handleTextChange(e) {
    this.setState(e)
  }
  render() {
    console.log('state', this.state.query);
    console.log('props', this.props.query);
    const { query } = this.state
    return (
      <SearchWrapper>
        <SearchInput
          value={query}
          onChange={e => this.handleTextChange({ query: e.target.value })}
          type='text' name='search' placeholder='ПОИСК ПО САЙТУ' />
        <SearchButton onClick={() => {
          query ? history.push({ pathname: `/search/${query}` }) :
            history.push({ pathname: `/search` })
        }
        }></SearchButton>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  display: flex;
  width: ${props => props.width};
  height: 80px;
  position: relative;
  @media ${responsive.notebook} {
    width: 100%;
    height: 65px;
  }
`;

const SearchInput = styled.input`
  font-family: Montserrat Regular;
  font-size: 16px;
  padding: 30px 26px; 
  color: #000000;
  flex: 1 1 auto;
  outline: none;
  border: none;

  @media ${responsive.notebook} {
    font-size: 14px;
  }
`;

const SearchButton = styled.div`
  width: 80px;
  height: 80px;
  background: #E6B980;
  background-image: url(${searchIco});
  box-sizing: border-box;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  cursor: pointer;
  @media ${responsive.notebook} {
    width: 65px;
    height: 65px;
  }
`;
