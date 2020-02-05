import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import Button from './Button'
import Navigation from './Navigation'
import TariffList from './TariffList'
import styled from 'styled-components'
import responsive from '../responsive'


export default class Tariff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [],
      tariff: [],
      sectionView: false,
      id: '',
      title: 'ТАРИФЫ'
    }
    this.returnBack = this.returnBack.bind(this)
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch('https://notary-nn.ru/api/v2/routes/section.php');
        if (await response.ok) {
          this.setState({ section: await response.json() })
        }
      } catch (err) {
        throw err;
      }
    })();
  }

  getTariff(id, section) {
    try {
      (async () => {
        const response = await fetch(
          `https://notary-nn.ru/api/v2/routes/section.php?id=${id}`
        );
        if (await response.ok) {
          this.setState({
            tariff: await response.json(),
            sectionView: true,
            title: section
          })
        }
      })();
    } catch (err) {
      throw err;
    }
  }
  returnBack(value) {
    this.setState({ sectionView: value, title: 'ТАРИФЫ' })
  }

  render() {
    return (
      <TariffWrapper>
        <Header backgroundImg='tariff' />
        <Title text={this.state.title} />
        {this.state.sectionView ?
          <TariffContainer>
            <TariffList tariff={this.state.tariff} onReturnBack={this.returnBack} />
            <Navigation title='НАЗАД' onReturnBack={this.returnBack} />
          </TariffContainer>
          :
          <TariffContainer>
            <TariffButtonContainer>
              {this.state.section.map((element, index) =>
                <ButtonWrapper key={index} onClick={() => this.getTariff(element.id, element.title)}>
                  {/* // <ButtonWrapper key={index} onClick={() => this.returnBack(true)}> */}
                  <Button
                    name={element.title}
                    size='big'
                    link=''
                  />
                </ButtonWrapper>
              )}
            </TariffButtonContainer>
            <Navigation title='КОНТАКТЫ' subtitle='СЛЕДУЮЩИЙ РАЗДЕЛ' />
          </TariffContainer>
        }
      </TariffWrapper>
    )
  }
}

const TariffWrapper = styled.div``

const TariffButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1260px;
  padding: 0 0 200px 0;
  margin: auto;

  @media ${responsive.tablet} {
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: center;
    padding: 0 0 150px 0;
  }
`

const ButtonWrapper = styled.div`
  padding: 15px;
  box-sizing: border-box;
  @media ${responsive.tablet} {
    width: 100%;
  }
`

const TariffContainer = styled.div``