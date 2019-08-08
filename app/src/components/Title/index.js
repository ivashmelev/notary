import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'


export default class Title extends Component {
  render() {
    const { text } = this.props;
    return (
      <TitleWrapper>
        <TitleText>{text}</TitleText>
      </TitleWrapper>
    )
  }
}

const TitleWrapper = styled.div`
  margin: 64px 0 100px;
  display: flex;
  justify-content: center;

  @media ${responsive.tablet} {
    margin: 64px 0 0;
    text-align: center;
  }
`;

const TitleText = styled.h2`
  color: #2D2D2D;
  font-family: Montserrat_Alternates Bold;
  font-size: 24px;
`;