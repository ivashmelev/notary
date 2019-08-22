import React, { Component } from 'react'
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
          <TariffElementTitle fsize="big">{title}</TariffElementTitle>
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
      </TariffElementWrapper >
    )
  }
}

const TariffElementWrapper = styled.div`
  position: relative;
  padding: 90px 0 0 0;
  @media ${responsive.tabletB} {
    padding: 0;
  }
`;

const TariffElementText = styled.span`
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  @media ${responsive.notebookB} {
    font-size: 16px;
    line-height: 30px; 
  }
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
  }
`;

const TariffElementBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 0 50px 0;
`;

const TariffElementTitle = styled.span`
  font-family: Montserrat Bold;
  font-size: ${props => props.fsize === 'big' ? '20px' : '18px'};
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  @media ${responsive.notebookB} {
    font-size: 18px;
    line-height: 30px; 
  }
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
  }
`;

const TariffElementSubtitle = styled.span`
  font-family: Montserrat Regular Italic;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  @media ${responsive.notebookB} {
    letter-spacing: 0em;
  }
`;
