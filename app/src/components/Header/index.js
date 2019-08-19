import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../Menu/index'
import ContactLine from '../ContactLine/index'

import aboutMobile from '../../assets/img/background/about@mobile.jpg'
import serviceMobile from '../../assets/img/background/service@mobile.jpg'
import tariffMobile from '../../assets/img/background/tariff@mobile.jpg'
import contactMobile from '../../assets/img/background/contact@mobile.jpg'
import searchMobile from '../../assets/img/background/search@mobile.jpg'

import aboutNetbook from '../../assets/img/background/about@netbook.jpg'
import serviceNetbook from '../../assets/img/background/service@netbook.jpg'
import tariffNetbook from '../../assets/img/background/tariff@netbook.jpg'
import contactNetbook from '../../assets/img/background/contact@netbook.jpg'
import searchNetbook from '../../assets/img/background/search@netbook.jpg'

import aboutDesktop from '../../assets/img/background/about@desktop.jpg'
import serviceDesktop from '../../assets/img/background/service@desktop.jpg'
import tariffDesktop from '../../assets/img/background/tariff@desktop.jpg'
import contactDesktop from '../../assets/img/background/contact@desktop.jpg'
import searchDesktop from '../../assets/img/background/search@desktop.jpg'

import responsive from '../../responsive'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
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
    const { backgroundImg } = this.props;
    const { contacts } = this.state;
    return (
      <HeaderWrapper>
        <HeaderBackgroundImg
          urlLarge={
            backgroundImg === 'about' ? aboutDesktop :
              backgroundImg === 'service' ? serviceDesktop :
                backgroundImg === 'tariff' ? tariffDesktop :
                  backgroundImg === 'contact' ? contactDesktop :
                    backgroundImg === 'search' ? searchDesktop : null}
          urlMiddle={
            backgroundImg === 'about' ? aboutNetbook :
              backgroundImg === 'service' ? serviceNetbook :
                backgroundImg === 'tariff' ? tariffNetbook :
                  backgroundImg === 'contact' ? contactNetbook :
                    backgroundImg === 'search' ? searchNetbook : null}
          urlSmall={
            backgroundImg === 'about' ? aboutMobile :
              backgroundImg === 'service' ? serviceMobile :
                backgroundImg === 'tariff' ? tariffMobile :
                  backgroundImg === 'contact' ? contactMobile :
                    backgroundImg === 'search' ? searchMobile : null} />
        <Menu contacts={contacts} />
        <HeaderContactBlock>
          {contacts.map((element, index) =>
            <ContactLine key={index} phone={element.phone} mail={element.mail} />
          )}
        </HeaderContactBlock>
      </HeaderWrapper>

    )
  }
}

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45vh;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin: auto;
  position: relative;
  z-index: 20;
  @media ${responsive.notebook} {
    height: 45vh;
  }
  @media ${responsive.tablet} {
    height: 320px;
  }
  @media ${responsive.mobileS} {
    height: 270px;
  }
`;

const HeaderContactBlock = styled.div``;

const HeaderBackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.urlLarge});
  background-position: center;
  background-size: cover;
  filter: brightness(.7);
  @media ${responsive.notebook} {
    background-image: url(${props => props.urlMiddle});
  }
  @media ${responsive.tablet} {
    background-image: url(${props => props.urlSmall});
  }
`;



