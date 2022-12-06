import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu/index'
import ContactLine from './ContactLine/index'
import backgroundImgMain from '../assets/img/background/main@desktop.jpg'
import backgroundImgMainMiddle from '../assets/img/background/main@netbook.jpg'
import backgroundImgMainSmall from '../assets/img/background/main@mobile.jpg'

import { Scrollbar } from './Scrollbar/'

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
        const response = await fetch('https://notary-nn.ru/api/v2/routes/contact.php');
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
        <MainBackgroundButton onClick={() => history.push({ pathname: '/service' })} />
        <MainBackgroundImg>
        </MainBackgroundImg>
        <Menu contacts={contacts} />
        <MainScreen>
          <MainTitleContainer>
            <MainTitle>Пережогина Ангелина Юрьевна<br />нотариус города областного значения Нижнего Новгорода</MainTitle>
          </MainTitleContainer>
        </MainScreen>

        <MainContent>
          <Scrollbar>
            <MainScreenFake />
            <SubScreen>
              <InfoBlock>
                <p>
                  Лицензия на право нотариальной деятельности № 221 выдана Главным управлением Минюста России по
                  Нижегородской области 23 июня 2004 года
                </p>
                <p>
                  Приказ Главного управления Министерства юстиции Российской Федерации по Нижегородской области № 200 от 23
                  июня 2009 года
                </p>
                <p>
                  Номер в реестре Министерства юстиции - 52/177-н/52
                </p>
              </InfoBlock>
              <Lawyers>
                <h2>
                  Сотрудники нотариальной конторы, уполномоченные на совершение нотариальных действий в момент отсутствия нотариуса:
                </h2>
                <LawyersItems>
                  <LawyerItem>
                    <h3>
                      Калмыкова Оксана Васильевна
                    </h3>
                    <h4>
                      помощник нотариуса
                    </h4>
                    <p>Приказ Главного управления Минюста России по Нижегородской области № 445 от 01 октября 2021 года</p>
                  </LawyerItem>
                  <LawyerItem>
                    <h3>
                      Сергачев Виталий Сергеевич
                    </h3>
                    <h4>
                      помощник нотариуса
                    </h4>
                    <p>Приказ Главного управления Минюста России по Нижегородской области № 90-н от 12 декабря 2015 года</p>
                  </LawyerItem>
                </LawyersItems>
              </Lawyers>
            </SubScreen>
          </Scrollbar>
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

const LawyerItem = styled.div`
  padding: 15px;
  h3 {
    font-family: Montserrat Bold;
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #E6B980;
    @media ${ responsive.tablet} {
      font-size: 18px;
      letter-spacing: 0;
    }
  }
  h4 {
    font-family: Montserrat Bold;
    font-size: 16px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    @media ${ responsive.tablet} {
      font-size: 14px;
      letter-spacing: 0;
    }
  }
  p {
    font-family: Montserrat Regular;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    @media ${ responsive.notebookB} {
      font-size: 16px;
      line-height: 30px;
    }
    @media ${ responsive.tablet} {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0;
    }
  }
`

const LawyersItems = styled.div`
  margin-top: 40px;
  display: flex;
  @media ${responsive.tablet} {
    display: block;
  }
`

const Lawyers = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  h2 {
    max-width: 650px;
    width: 100%;
    line-height: 34px;
    font-family: Montserrat Regular;
    font-size: 22px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    text-align: center;
    @media ${ responsive.notebookB} {
      font-size: 22px;
    }
    @media ${ responsive.tablet} {
      font-size: 20px;
      letter-spacing: 0;
    }
  }
`

const InfoBlock = styled.div`
  max-width: 600px;
  width: 100%;
  p {
    font-family: Montserrat Regular;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    @media ${ responsive.notebookB} {
      font-size: 16px;
      line-height: 30px;
    }
    @media ${ responsive.tablet} {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0;
    }
  }
`

const SubScreen = styled.div`
  width: 100%;
  padding: 20px 60px 100px;
  background-color: #2D2D2D;
  box-sizing: border-box;
  box-shadow: 0px -8px 14px #00000075;
  position: relative;
  &:after {
    content: '↑';
    color: #E6B980;
    font-size: 42px;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%)
  }
  @media ${ responsive.tablet} {
    padding: 10px 15px;
  }
`

const MainScreenFake = styled.div`
  width: 100%;
  height: 99vh;
`

const MainScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${responsive.tablet} {
    position: relative;
    height: 55vh;
    background: #2D2D2D;
  }
`

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
    top: 0;
    position: relative;
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
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index:90;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
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
  @media ${responsive.notebookB} {
    font-size: 26px;
    width: 600px;
    height: 170px;
  }
  @media ${responsive.notebook} {
    width: 570px;
    height: 180px;
    padding-right: 60px;
  }
  @media ${responsive.tablet} {
    width: 100%;
    padding: 15px;
    text-align: right;
  }
`;

const MainTitle = styled.h1`
  font-size: 26px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #E6B980;
  font-family: Montserrat_Alternates Bold;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  @media ${responsive.notebookB} {
    font-size: 22px;
  }
  @media ${responsive.tablet} {
    font-size: 22px;
    letter-spacing: 0em;
  }
`;

const MainContactBlock = styled.div``;