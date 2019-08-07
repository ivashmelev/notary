import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import Button from '../Button'

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
          <MenuHamburgerLine></MenuHamburgerLine>
          <MenuHamburgerLine></MenuHamburgerLine>
          <MenuHamburgerLine></MenuHamburgerLine>
          <MenuHamburgerLine></MenuHamburgerLine>
        </MenuHamburger>
        <MenuLinkWrapper>
          <MenuLink href="">Главная</MenuLink>
          <MenuLink href="">О нас</MenuLink>
          <MenuLink href="">Услуги</MenuLink>
          <MenuLink href="">Тарифы</MenuLink>
          <MenuLink href="">Контакты</MenuLink>
          <Button name="Запись на прием" link="" color="grey" size="small" />
        </MenuLinkWrapper>
      </MenuWrapper >
    )
  }
}

const MenuWrapper = styled.div`
  display: flex;
  width: 1140px;
  height: 50px;
  justify-content: space-between;
  align-items: center;

  @media ${responsive.tablet} {
    flex-direction: column;
    max-width: 678px;
    width: 100%;
    align-items: flex-end;
  }
`;

const MenuHamburger = styled.div`
  display: block;
  width: 50px;
  height: 40px;
  position: relative;
  display: none;

  @media ${responsive.tablet} {
    display: block;
  }

`;

const MenuHamburgerLine = styled.span`
  width: 40px;
  height: 4px;
  background-color: #2D2D2D;
  border-radius: 6px;
  display: block;
  padding: -5px 0;
  margin: 7px 0;
  left: 0;
  transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:nth-child(3){
    margin-top: -11px;
  }

  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(1),
  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(4){
    width: 0;
    left: 50px;
  }

  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(2){
    transform: rotate(-45deg);
  }

  .${MenuWrapper.componentStyle.componentId}.open &:nth-child(3){
    transform: rotate(45deg);
  }
`;

const MenuLinkWrapper = styled.div`
  display: flex;
  width: 1140px;
  height: 50px;
  justify-content: space-between;
  align-items: center;

  @media ${responsive.tablet} {
    position: relative;
    z-index: -1;
    flex-direction: column;
    max-width: 678px;
    width: 100%;
    align-items: flex-end;
    opacity: 0;
    transition: .5s cubic-bezier(0.18, 0.89, 0.32, 1.28);


    .${MenuWrapper.componentStyle.componentId}.open &{
      opacity: 1;
      z-index: 50;
      transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }
  }
`;


const MenuLink = styled.a`
  font-family: Montserrat Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;

  @media ${responsive.tablet} {
    padding: 15.5px;
  }
`;
