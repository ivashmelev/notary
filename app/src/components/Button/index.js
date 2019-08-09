import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'


export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { name, link, color, size, margin } = this.props;
    return (
      <ButtonWrapper color={color} size={size} margin={margin}>
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
  height: ${props => props.size === 'big' ? '100px' : '50px'};
  background-color: ${props => props.color === 'grey' ? '#2D2D2D' : '#E6B980'};
  margin: ${props => props.margin};
  box-sizing: border-box;
  text-align: center;

  &:hover{
    cursor: pointer;
    background-color: ${props => props.color === 'grey' ? '#2D2D2D' : '#f7b158'};
  }

  @media ${responsive.tablet} {
    padding: 15.5px;
    width: ${props => props.size === 'big' ? '300px' : '225px'};
    background-color: ${props => props.color === 'grey' ? '#E6B980' : '#E6B980'};
  }

`;

const ButtonLink = styled.div`
  font-size: 16px;
  font-family: Montserrat Bold;
  color: #ffffff;
  letter-spacing: 0.05em;
`;

