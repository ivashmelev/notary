import React, { Component } from 'react'
import styled from 'styled-components'

export default class OptionNavigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <OptionNavigationWrapper>
        <OptionNavigationTitle>{title}</OptionNavigationTitle>
      </OptionNavigationWrapper>
    )
  }
}

const OptionNavigationWrapper = styled.a`
  margin-top: 15px;
  width: 220px;
  height: 60px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
  display: flex;
  align-items: center;

  :hover{
    cursor: pointer;
  }
`;

const OptionNavigationTitle = styled.h2`
  font-size: 14px;
  color: #2D2D2D;
  font-weight: 500;
  flex: 1 1 auto;
  padding: 0 10px;
  font-weight: bold;
`;

