import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../Menu/index'
import ContactLine from '../ContactLine/index'
import aboutImg from '../../assets/img/backgroundImgAbout.png'
import serviceImg from '../../assets/img/backgroundImgService.png'
import tariffImg from '../../assets/img/backgroundImgTariff.png'
import responsive from '../../responsive'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { backgroundImg } = this.props;
    return (
      <HeaderWrapper>
        <HeaderBackgroundImg url={
          backgroundImg === 'about' ? aboutImg :
            backgroundImg === 'service' ? serviceImg :
              backgroundImg === 'tariff' ? tariffImg : null} />
        <Menu />
        <ContactLine phone='8 (831) 999-99-99' mail='notary@gmail.com' />
      </HeaderWrapper>

    )
  }
}

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin: auto;
  position: relative;
  z-index: 20;
  @media ${responsive.notebook} {
    height: 50vh;
  }
  @media ${responsive.tablet} {
    height: 320px;
  }
  @media ${responsive.mobileS} {
    height: 270px;
  }
`;

const HeaderBackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  filter: brightness(.7);
`;



