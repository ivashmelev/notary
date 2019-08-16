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
    const { current, title, description } = this.props;
    return (
      <ServiceElementWrapper current={current}>
        <ServiceElementTitle>
          {title}
        </ServiceElementTitle>
        <ServiceElementText>{description}</ServiceElementText>
        <ServiceElementButton>
          <Button name='Запись на прием' link />
        </ServiceElementButton>
      </ServiceElementWrapper >
    )
  }
}

const ServiceElementWrapper = styled.div`
  position: relative;
  padding: 60px 0 0 0;
  /* transform: ${props => (props.current === 1 ? 'translateY(75px)' :
    `translateY(${props.current * 100 - 25}px)`)}; */

  @media ${responsive.tabletB} {
    padding: 0;
  }
`;

const ServiceElementTitle = styled.div`
  font-family: Montserrat Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2D2D2D;
  margin: 0 0 30px 0;
  display: none;
  @media ${responsive.tabletB} {
    display: block;
  }
  @media ${responsive.tablet} {
    font-size: 16px;
    margin: 0 0 25px 0;
  }
`

const ServiceElementText = styled.span`
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;

  @media ${responsive.tablet} {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 25px;
  }

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
  margin-top: 40px;

  @media ${responsive.tablet} {
    display: flex;
    justify-content: flex-start;
  }
`;