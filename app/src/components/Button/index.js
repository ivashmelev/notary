import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import history from '../../helpers/history'


export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { name, link, color, size, margin } = this.props;
    return (
      <ButtonWrapper color={color} size={size} margin={margin} onClick={link ? () => history.push('/appointment') : null}>
        <ButtonLink size={size}>{name}</ButtonLink>
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
    width: ${props => props.size === 'big' ? '100%' : '225px'};
    background-color: ${props => props.color === 'grey' ? '#E6B980' : '#E6B980'};
  }

`;

const ButtonLink = styled.div`
  font-size: ${props => props.size === 'big' ? '18px' : '16px'} ;
  font-family: Montserrat Bold;
  color: #ffffff;
  letter-spacing: 0.05em;
  @media ${responsive.tablet} {
    font-size: 16px;
    letter-spacing: ${props => props.size === 'big' ? '0' : '0.05em'};
  }
`;

