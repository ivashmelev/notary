import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../Menu/index'
import ContactLine from '../ContactLine/index'
import aboutImg from '../../assets/img/backgroundImgAbout.png'
import serviceImg from '../../assets/img/backgroundImgService.png'
import tariffImg from '../../assets/img/backgroundImgTariff.png'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { backgroundImg } = this.props;

    console.log(this.props);
    return (
      <HeaderWrapper>
        <HeaderBackgroundImg src={
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
  max-width: 1440px;
  height: 530px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin: auto;
  position: relative;
  z-index: 20;
  background-image: url(${aboutImg});
`;

const HeaderBackgroundImg = styled.img`
  filter: brightness(.7);
  position: absolute;
`;



