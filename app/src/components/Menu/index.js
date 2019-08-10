import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import Button from '../Button'
import history from '../../helpers/history'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <MenuWrapper>
        <MenuHamburger onClick={() => {
          const menu = document.querySelector(`.${MenuWrapper.componentStyle.componentId}`);
          menu.classList.toggle('open');
        }}>
          <MenuHamburgerBox>
            <MenuHamburgerBoxLine />
          </MenuHamburgerBox>
          <MenuHamburgerBox>
            <MenuHamburgerBoxLine />
            <MenuHamburgerBoxLine />
          </MenuHamburgerBox>
          <MenuHamburgerBox>
            <MenuHamburgerBoxLine />
          </MenuHamburgerBox>
        </MenuHamburger>
        <MenuLinkWrapper>
          <MenuLink onClick={() => history.push({ pathname: '/' })}>Главная</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/about' })}>О нас</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/service' })}>Услуги</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/tariff' })}>Тарифы</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/contact' })}>Контакты</MenuLink>
          <MenuButton>
            <Button name="Запись на прием" link="" color="grey" size="small" />
          </MenuButton>
        </MenuLinkWrapper>
      </MenuWrapper >
    )
  }
}


const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 99;
  justify-content: flex-end;
  align-items: center;

  @media ${responsive.tablet} {
    position: absolute;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
    &.open {
      position: fixed;
      top: 0;
      height: 100vh;
    }
  }
`;

const MenuHamburger = styled.div`
  display: none;
  width: 30px;
  height: 16px;
  position: absolute;
  z-index: 100;
  flex-direction: column;
  justify-content: space-between;
  top: 30px;
  right: 15px;
  @media ${responsive.tablet} {
    display: flex;
  }

`;


const MenuHamburgerBoxLine = styled.div`
  width: 30px;
  height: 2px;
  background-color: #ffffff;
  position: absolute;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
`
const MenuHamburgerBox = styled.div`
  width: 100%;
  position: relative;
  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(1) ${MenuHamburgerBoxLine},
  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(3) ${MenuHamburgerBoxLine}{
    opacity: 0;
  }
  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(2) ${MenuHamburgerBoxLine}:nth-child(1){
    transform: rotate(45deg);
  }
  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(2) ${MenuHamburgerBoxLine}:nth-child(2){
    transform: rotate(-45deg);
  }
`

const MenuLinkWrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;

  @media ${responsive.tablet} {
    /* position: relative;
    z-index: -1;
    flex-direction: column; */
    /* max-width: 678px; */
    /* width: 100%;
    align-items: flex-end;
    opacity: 0; */
    /* transition: .5s cubic-bezier(0.18, 0.89, 0.32, 1.28); */
    width: 100%;
    height: 0;
    background: #2D2D2D;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0 0 0;
    position: fixed;
    top: 0;
    padding: 0;
    transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
    overflow: auto;
    box-sizing: border-box;

    .${MenuWrapper.componentStyle.componentId}.open &{
      height: 100%;
      padding: 115px 0 30px 0;
      /* transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28); */
    }
  }
`;


const MenuLink = styled.a`
  font-family: Montserrat Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  padding: 15px 15px;
  letter-spacing: 0.05em;
  cursor: pointer;
  @media ${responsive.tablet} {
    padding: 15px 30px;
    font-size: 24px;
  }
`;

const MenuButton = styled.div`
  margin: 0 0 0 15px;
  @media ${responsive.tablet} {
    margin: 0;
    position: absolute;
    top: 15px;
  }

  @media ${responsive.mobileS} {
    margin-top: 0;
  }
`;