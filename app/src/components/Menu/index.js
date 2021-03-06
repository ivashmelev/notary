import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
// import Button from '../Button'
import history from '../../helpers/history'
import { cleanPhone } from '../../helpers/format'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { contacts } = this.props
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
        {contacts.length > 0 ? (
          <MenuNumberPhone href={`tel:+7${cleanPhone(contacts[0].phone)}`}>
            {contacts[0].phone}
          </MenuNumberPhone>
        ) : null
        }
        <MenuLinkWrapper>
          <MenuLink onClick={() => history.push({ pathname: '/' })}>Главная</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/service' })}>Нотариальные действия</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/tariff' })}>Тарифы</MenuLink>
          <MenuLink onClick={() => history.push({ pathname: '/contact' })}>Контакты</MenuLink>
          {/*<MenuButton onClick={() => history.push({ pathname: '/appointment' })}>
            <Button name="Запись на прием" link="" color="grey" size="small" />
          </MenuButton>*/}
          <MenuLinkContactWrap>
            {
              contacts.length > 0 ? (
                <MenuLinkContactBlock>
                  <MenuLinkContact href={`tel:+7${cleanPhone(contacts[0].phone)}`}>{contacts[0].phone}</MenuLinkContact>
                  <MenuLinkContact href={`tel:+7${cleanPhone(contacts[1].phone)}`}>{contacts[1].phone}</MenuLinkContact>
                  <MenuLinkContact href={`mailto:${contacts[0].mail}`}>{contacts[0].mail}</MenuLinkContact>
                  <MenuLinkContact href={`mailto:${contacts[1].mail}`}>{contacts[1].mail}</MenuLinkContact>
                </MenuLinkContactBlock>
              ) : null

            }
          </MenuLinkContactWrap>
        </MenuLinkWrapper>
      </MenuWrapper >
    )
  }
}

const MenuNumberPhone = styled.a`
  display: none;
  font-family: Montserrat Regular;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-decoration: none;
  position: absolute;
  left: 15px;
  top: 30px;
  @media ${responsive.tablet} {
    display: block;
  }
`
const MenuLinkContact = styled.a`
  font-family: Montserrat Regular;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-decoration: none;
`

const MenuLinkContactWrap = styled.div`
  display: none;
  @media ${responsive.tablet} {
    display: flex;
    flex-direction: column;
    padding: 35px 0;
  }
`

const MenuLinkContactBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover{
    opacity: 0.65;
  }
  @media ${responsive.tablet} {
    padding: 15px 30px;
    font-size: 24px;
    text-align: left;
  }
`;

// const MenuButton = styled.div`
//   margin: 0 0 0 15px;
//   transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
//   &:hover{
//     box-shadow: 0 0 12px 2px #4a4a4a;
//   }
//   @media ${responsive.tablet} {
//     margin: 0;
//     position: absolute;
//     top: 15px;
//   }

//   @media ${responsive.mobileS} {
//     margin-top: 0;
//   }
// `;