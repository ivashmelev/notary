import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu/index'
import ContactLine from './ContactLine/index'
import backgroundImgMain from '../assets/img/backgroundImgMain.png'
import Search from './Search'
import responsive from '../responsive'



export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <MainBackgroundImg></MainBackgroundImg>
        <Menu />
        <MainContent>
          <MainTitleContainer>
            <MainTitle>Нотариальная контора</MainTitle>
            <MainTitle>Нижнего Новгорода</MainTitle>
          </MainTitleContainer>
          <Search />
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
  max-width: 1440px;
  height: 100vh;
  margin: auto;
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
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.tablet} {
    width: 100%;
  }
`;

const MainTitleContainer = styled.div`
  width: 720px;
  height: 199px;
  background: #2D2D2D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-right: 94px;
  box-sizing: border-box;

  @media ${responsive.tablet} {
    width: 100%;
    padding-right: 0;
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
`;