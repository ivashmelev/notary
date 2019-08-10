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
      section: [
        {
          title: 'Договора, соглашения, сделки'
        },
        {
          title: 'Завещание'
        },
        {
          title: 'Доверенность'
        },
        {
          title: 'Депозит нотариуса'
        },
        {
          title: 'Копии документов (выписки из них)'
        },
        {
          title: 'Свидетельство подлинности подписи'
        },
        {
          title: 'Наследство'
        },
        {
          title: 'Иные нотариальные действия'
        }
      ],
      tariff: [
        {
          id: '0',
          title: 'Удостоверение сделок, предметом которых является отчуждение недвижимого имущества (когда нотариальная форма обязательна)',
          subtitle: '* за исключением ренты и пожизненного содержания с иждивением',
          tariff: '0.5 % от суммы договора (кадастровой или оценочной), но не менее 300 рублей и не более 20 000 рублей',
          price: '4 500 рублей'
        },
        {
          id: '1',
          title: 'Удостоверение сделок, предметом которых является отчуждение недвижимого имущества (когда нотариальная форма не обязательна)',
          subtitle: '- супругу, родителям, детям, внукам в зависимости от суммы сделки: - до 10 000 000 рублей включительно - свыше 10 000 000 рублей - другим лицам в зависимости от суммы сделки: - до 1 000 000 рублей включительно - свыше 1 000 000 рублей до 10 000 000 рублей включительно - свыше 10 000 000 рублей',
          tariff: '3 000 рублей + 0,2 % от оценки недвижимого имущества (суммы сделки) 23 000 рублей + 0,1 % от суммы сделки, превышающей 10 000 000 рублей, но не более 50 000 рублей',
          price: '2 250 - 9 000 рублей - удостоверение сделок, сторонами которых являются только физические лица, а предметом - отчуждение жилого помещения (в т.ч. комнаты, квартиры), индивидуального жилого дома, садового дома, гаража, сарая и земельного участка под указанными объектами, или 9 000 рублей - удостоверение сделок, указанных в предыдущем абзаце, хотя бы одной из сторон в которых является юридическое лицо, а также сделок предметом которых является отчуждение недвижимого имущества не указанного в предыдущем абзаце (иные нежилые помещения, здания, сооружения и земельные участки под указанными объектами, земельные участки, как самостоятельные объекты права, воздушные и морские суда, суда внутреннего плавания и др.)'
        },
        {
          id: '2',
          title: 'Удостоверение договоров ренты и пожизненного содержания с иждивением',
          subtitle: '',
          tariff: '0.5 % от суммы договора, но не менее 300 рублей и не более 20 000 рублей',
          price: '6 300 рублей'
        },
      ],
      sectionView: false,
      id: '',
      title: 'ТАРИФЫ'
    }
    this.returnBack = this.returnBack.bind(this)
  }

  componentDidMount() {
    // (async () => {
    //   try {
    //     const response = await fetch('http://api.loc/api/v1/routes/section.php');
    //     if (await response.ok) {
    //       this.setState({ section: await response.json() });
    //       console.log(this.state.section)
    //     }
    //   } catch (err) {
    //     throw err;
    //   }
    // })();
  }

  getTariff(id, section) {
    // console.log(id);
    // try {
    //   (async () => {
    //     const response = await fetch(
    //       `http://api.loc/api/v1/routes/section.php?id=${id}`
    //     );
    //     if (await response.ok) {
    //       this.setState({
    //         tariff: await response.json(),
    //         sectionView: true,
    //         title: section
    //       });
    //       console.log(this.state.tariff);
    //     }
    //   })();
    // } catch (err) {
    //   throw err;
    // }
  }
  returnBack(value) {
    this.setState({ sectionView: value})
  }

  render() {
    return (
      <TariffWrapper>
        <Header backgroundImg='tariff' />
        <Title text={this.state.title} />
        {this.state.sectionView ?
          <TariffContainer>
            <TariffList tariff={this.state.tariff} onReturnBack={this.returnBack}/>
            <Navigation title='НАЗАД' onReturnBack={this.returnBack}/>
          </TariffContainer>
          :
          <TariffContainer>
            <TariffButtonContainer>
              {this.state.section.map((element, index) =>
                // <ButtonWrapper key={index} onClick={() => this.getTariff(element.id, element.title)}>
                <ButtonWrapper key={index} onClick={() => this.returnBack(true)}>
                  <Button
                    name={element.title}
                    size='big'
                    link=''
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

const TariffListContainer = styled.div``;

const ButtonWrapper = styled.div`
  padding: 15px;
  box-sizing: border-box;
  @media ${responsive.tablet} {
    width: 100%;
  }
`;

const TariffContainer = styled.div``;