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
      title: 'Тарифы'
    }
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch('http://api.loc/api/v1/routes/section.php');
        if (await response.ok) {
          this.setState({ section: await response.json() });
          console.log(this.state.section)
        }
      } catch (err) {
        throw err;
      }
    })();
  }

  getTariff(id, section) {
    console.log(id);
    try {
      (async () => {
        const response = await fetch(
          `http://api.loc/api/v1/routes/section.php?id=${id}`
        );
        if (await response.ok) {
          this.setState({
            tariff: await response.json(),
            sectionView: true,
            title: section
          });
          console.log(this.state.tariff);
        }
      })();
    } catch (err) {
      throw err;
    }
  }


  render() {
    return (
      <TariffWrapper>
        <Header backgroundImg='tariff' />
        <Title text={this.state.title} />
        {this.state.sectionView ?
          <TariffContainer>
            <TariffList tariff={this.state.tariff} />
            <Navigation title='НАЗАД' />
          </TariffContainer>
          :
          <TariffContainer>
            <TariffButtonContainer>
              {this.state.section.map((element, index) =>
                <ButtonWrapper key={index} onClick={() => this.getTariff(element.id, element.title)}>
                  <Button
                    name={element.title}
                    size='big'
                    link=''
                    margin="15px"
                  />
                </ButtonWrapper>
              )}
            </TariffButtonContainer>
            <Navigation title='Контакты' subtitle='СЛЕДУЮЩИЙ РАЗДЕЛ' />
          </TariffContainer>
        }
      </TariffWrapper>
    )
  }
}

const TariffWrapper = styled.div`
  /* max-width: 1440px; */
  /* margin: auto; */
`;

const TariffButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  margin: auto;

  @media ${responsive.tablet} {
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: center;
  }
`

const TariffListContainer = styled.div``;

const ButtonWrapper = styled.div``;

const TariffContainer = styled.div``;