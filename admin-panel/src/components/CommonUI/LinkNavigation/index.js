import React, { Component } from 'react'
import styled from 'styled-components'
import history from '../../../helpers/history'

class LinkNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const { title, link, active } = this.props
    return (
      <LinkNavigationWrapper onClick={() => history.push({ pathname: `${link}` })}>
        {title}
      </LinkNavigationWrapper>
    );
  }
}

export default LinkNavigation;

const LinkNavigationWrapper = styled.div`
  max-width: 220px;
  width: 100%;
  height: 40px;
  background: rgba(223, 223, 223, 0.5);
  border-radius: 12px;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  margin: 5px 0 10px 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #2D2D2D;
  cursor: pointer;
  &:hover{
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`