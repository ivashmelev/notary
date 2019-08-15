import React, { Component } from 'react'
import styled from 'styled-components'
import logoutIcon from '../../assets/icons/logout.svg'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle>Admin Panel</HeaderTitle>
        <HeaderLogut>
          <HeaderLogutImg src={logoutIcon}/>
        </HeaderLogut>
      </HeaderWrapper>
    );
  }
}

export default Header;

const HeaderLogutImg = styled.img`
  width: 100%;
`
const HeaderLogut = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 10px;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  &:hover{
    background-color: #7EB7FF8C;
  }
`
const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 0.05em;
`
const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0070FF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 2;
`