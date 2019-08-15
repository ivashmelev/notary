import React, { Component } from 'react'
import styled from 'styled-components'
import User from '../CommonUI/UserNavigation'
import Option from '../CommonUI/OptionNavigation'

class Navigation extends Component {
  render() {
    return (
      <NavigationWrapper>
        <User />
        <Option title='Услуги' />
      </NavigationWrapper>
    );
  }
}

export default Navigation;

const NavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EBEFEF;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  padding: 15px;
`