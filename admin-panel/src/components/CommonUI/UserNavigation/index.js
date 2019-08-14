import React, { Component } from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'
import settings from '../../../assets/icons/settings.svg'

class UserNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const { userName } = this.props
    return (
      <UserNavigationWrapper>
        <Avatar size='40px'/>
        <UserName>Пережогина Ангелина</UserName>
        <UserSettings src={ settings }/>
      </UserNavigationWrapper>
    )
  }
}

export default UserNavigation;

const UserSettings = styled.img`
  width: 20px;
  height: 20px;
`
const UserName = styled.div`
  font-size: 12px;
  color: #2D2D2D;
  font-weight: 500;
  flex: 1 1 auto;
  padding: 0 10px;
`
const UserNavigationWrapper = styled.div`
  width: 220px;
  height: 60px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
  display: flex;
  align-items: center;
`