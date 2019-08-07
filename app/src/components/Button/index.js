import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'


export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { name, link, color, size } = this.props;
    return (
      <ButtonWrapper color={color} size={size}>
        <ButtonLink href={link}>{name}</ButtonLink>
      </ButtonWrapper>
    )
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size === 'big' ? '520px' : '225px'};
  height: 50px;
  background-color: ${props => props.color === 'grey' ? '#2D2D2D' : '#E6B980'};

  &:hover{
    cursor: pointer;
  }

  @media ${responsive.tablet} {
    padding: 15.5px;
  }

`;

const ButtonLink = styled.div`
  font-size: 16px;
  font-family: Montserrat Bold;
  color: #ffffff;
`;

