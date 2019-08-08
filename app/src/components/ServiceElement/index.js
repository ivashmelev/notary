import React, { Component } from 'react'
import Button from '../Button'
import styled from 'styled-components'
import responsive from '../../responsive'

export default class ServiceElement extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { current, description } = this.props;
    return (
      <ServiceElementWrapper current={current}>
        <ServiceElementText>{description}</ServiceElementText>
        <ServiceElementButton>
          <Button name='Запись на прием' link='' />
        </ServiceElementButton>
      </ServiceElementWrapper >
    )
  }
}

const ServiceElementWrapper = styled.div`
  position: relative;
  transform: ${props => (props.current === 1 ? 'translateY(75px)' :
    `translateY(${props.current * 100 - 25}px)`)};

  @media ${responsive.tablet} {
    transform: translateY(75px);
  }
`;

const ServiceElementText = styled.span`
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;

  &::before{
    content: '';
    position: relative;
    width: 50px;
    height: 1px;
    background-color: #2D2D2D;
    display: block;
    top: 17px;
    left: -85px;
  }
`;

const ServiceElementButton = styled.div`
  margin-top: 55px;

  @media ${responsive.tablet} {
    display: flex;
    justify-content: center;
  }
`;