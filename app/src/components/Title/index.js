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
  margin: 64px 0 100px 0;
  display: flex;
  justify-content: center;

  @media ${responsive.tablet} {
    margin: 50px 0;
  }
`;

const TitleText = styled.h2`
  color: #2D2D2D;
  font-family: Montserrat_Alternates Bold;
  font-size: 24px;
  letter-spacing: 0.05em;
  margin: 0;
  text-align: center;
  padding: 0 15px;
  @media ${responsive.tablet} {
    font-size: 18px;
  }
`;