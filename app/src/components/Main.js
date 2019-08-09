import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu/index'
import ContactLine from './ContactLine/index'
import backgroundImgMain from '../assets/img/backgroundImgMain.png'
import Search from './Search'
import responsive from '../responsive'
import arrowIco from '../assets/img/arrow.png'



export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <MainBackgroundImg>
          <MainBackgroundButton>

          </MainBackgroundButton>
        </MainBackgroundImg>
        <Menu />
        <MainContent>
          <MainTitleContainer>
            <MainTitle>Нотариальная контора</MainTitle>
            <MainTitle>Нижнего Новгорода</MainTitle>
          </MainTitleContainer>
          <Search width='720px' />
        </MainContent>
        <ContactLine phone='8 (831) 999-99-99' mail='notary@gmail.com' />
      </MainWrapper>
    )
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  position:relative;
`;

const MainBackgroundImg = styled.div`
  position: absolute;
  background-image: url(${backgroundImgMain});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin: auto;
  filter: brightness(.7);
  @media ${responsive.tablet} {
    height: 50vh;
    bottom: 0;
    filter: brightness(1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const MainBackgroundButton = styled.div`
  @media ${responsive.tablet} {
    width: 65px;
    height: 65px;
    background: #E6B980;
    background-image: url(${arrowIco});
    box-sizing: border-box;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.tablet} {
    width: 100%;
    height: 50vh;
  }
`;

const MainTitleContainer = styled.div`
  width: 720px;
  height: 200px;
  background: #2D2D2D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-right: 94px;
  box-sizing: border-box;

  @media ${responsive.notebook} {
    width: 570px;
    height: 180px;
    padding-right: 30px;
  }
  @media ${responsive.tablet} {
    width: 100%;
    padding: 15px;
    height: 100%;
    text-align: right;
  }
`;

const MainTitle = styled.h1`
  font-size: 36px;
  letter-spacing: 0.05em;
  color: #E6B980;
  font-family: Montserrat_Alternates Bold;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  @media ${responsive.notebook} {
    font-size: 28px;
  }
  @media ${responsive.tablet} {
    font-size: 24px;
    letter-spacing: 0em;
  }
`;