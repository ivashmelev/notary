import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu/index'
import ContactLine from './ContactLine/index'
import backgroundImgMain from '../assets/img/background/main@desktop.jpg'
import backgroundImgMainMiddle from '../assets/img/background/main@netbook.jpg'
import backgroundImgMainSmall from '../assets/img/background/main@mobile.jpg'

import Search from './Search'
import responsive from '../responsive'
import arrowIco from '../assets/img/arrow.png'
import history from '../helpers/history'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch('https://foxstudio.site/api/v2/routes/contact.php');
        if (response.ok) {
          this.setState({ contacts: await response.json() });
        }
      } catch (err) {
        throw err;
      }
    })();
  }

  render() {
    const { contacts } = this.state;
    return (
      <MainWrapper>
        <MainBackgroundImg>
          <MainBackgroundButton onClick={() => history.push({ pathname: '/about' })} />
        </MainBackgroundImg>
        <Menu contacts={contacts} />
        <MainContent>
          <MainTitleContainer>
            <MainTitle>Нотариальная контора</MainTitle>
            <MainTitle>Нижнего Новгорода</MainTitle>
          </MainTitleContainer>
          <Search width='720px' />
        </MainContent>
        <MainContactBlock>
          {
            contacts.length > 0 ? (
              <ContactLine phone={contacts[1].phone} mail={contacts[1].mail} />
            ) : null
          }
        </MainContactBlock>
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
  @media ${responsive.notebook} {
    background-image: url(${backgroundImgMainMiddle});
  }
  @media ${responsive.tablet} {
    background-image: url(${backgroundImgMainSmall});

    height: 55vh;
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
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.tablet} {
    width: 100%;
    height: 45vh;
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

const MainContactBlock = styled.div``;