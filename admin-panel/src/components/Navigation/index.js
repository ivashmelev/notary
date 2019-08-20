import React, { Component } from 'react'
import styled from 'styled-components'
import User from '../CommonUI/UserNavigation'
import Link from '../CommonUI/LinkNavigation'
import _ from 'lodash'
import history from '../../helpers/history'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const { navigation, userName } = this.props
    return (
      <NavigationWrapper>
        <User userName={userName}/>
        <LinkWrapper>
          {
            _.map(navigation, (item, index) => {
              return (
                <Link title={item.title} link={item.link} key={index}/>
              )
            })
          }
        </LinkWrapper>
      </NavigationWrapper>
    );
  }
}

export default Navigation;

const LinkWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
`
const NavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EBEFEF;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  padding: 15px;
`