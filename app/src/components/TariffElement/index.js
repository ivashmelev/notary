import React, { Component } from 'react'
import Button from '../Button'
import styled from 'styled-components'
import responsive from '../../responsive'

export default class TariffElement extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { price, subtitle, tariff, title, } = this.props;
    return (
      <TariffElementWrapper>
        <TariffElementBlock>
          <TariffElementTitle>{title}</TariffElementTitle>
          <TariffElementSubtitle>{subtitle}</TariffElementSubtitle>
        </TariffElementBlock>
        <TariffElementBlock>
          <TariffElementTitle>Тариф</TariffElementTitle>
          <TariffElementText>{tariff}</TariffElementText>
        </TariffElementBlock>
        <TariffElementBlock>
          <TariffElementTitle>Размер платы за услуги правового и технического характера (УПТХ)</TariffElementTitle>
          <TariffElementText>{price}</TariffElementText>
        </TariffElementBlock>
        <TariffElementButton>
          <Button name='Запись на прием' link='' />
        </TariffElementButton>
      </TariffElementWrapper >
    )
  }
}

const TariffElementWrapper = styled.div`
  position: relative;
  transform: translateY(75px);
`;

const TariffElementText = styled.span`
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
`;

const TariffElementButton = styled.div`
  margin-top: 55px;

  @media ${responsive.tablet} {
    display: flex;
    justify-content: flex-start;
  }
`;

const TariffElementBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TariffElementTitle = styled.span`
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
`;

const TariffElementSubtitle = styled.span`
  font-family: Montserrat Regular Italic;
  font-size: 14px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
`;
