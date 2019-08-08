import React, { Component } from 'react'
import TariffElement from '../TariffElement'
import Navigation from '../Navigation/index'
import styled from 'styled-components'
import responsive from '../../responsive'
import backImg from '../../assets/img/back.png'

export default class TariffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '5'
    }
  }

  render() {
    const { tariff } = this.props;
    return (
      <TariffListWrapper tariff={tariff}>
        <TariffListContainer>

          <TariffListTitle>
            <TariffListTitleElement
              onClick={() => window.location.href = "/tariff"}
            >
              <TariffListTitleImg src={backImg} />
              Назад
          </TariffListTitleElement>
            {tariff.map((element, index, array) =>
              <TariffListTitleElement
                key={index}
                onClick={() => {
                  this.setState({ current: element.id });
                  if (window.innerWidth < 720) { window.scrollTo(10, 1600) }
                }}
              >
                {element.title}
              </TariffListTitleElement>
            )}
          </TariffListTitle>
          <TariffListDescription>
            {tariff.map((element, index) =>
              this.state.current === element.id ?
                <TariffElement
                  key={index}
                  title={element.title}
                  subtitle={element.subtitle}
                  tariff={element.tariff}
                  price={element.price}
                />
                : null)}
          </TariffListDescription>
        </TariffListContainer>
        <TariffListNote>
          <TariffListNoteTitle>Примечание</TariffListNoteTitle>
          <TariffListNotePointTitle>Освобождаются от уплаты УПТХ:</TariffListNotePointTitle>
          <TariffListNotePointText>Участники и инвалиды ВОВ – на 100 %;</TariffListNotePointText>
          <TariffListNotePointText>Инвалиды 1 группы – на 50 %;</TariffListNotePointText>
          <TariffListNotePointText>Дети-сироты и дети, оставшиеся без попечения родителей, помещенные под надзор в организации для детей-сирот и детей, оставшихся без попечения родителей – на 100 % </TariffListNotePointText>
          <TariffListNotePointText>Несовершеннолетние при отчуждении недвижимого имущества пропорционально их участию в договоре;</TariffListNotePointText>
          <TariffListNotePointText>Органы гос. власти и МСУ при выдаче свидетельств на выморочное имущество;</TariffListNotePointText>
          <TariffListNotePointTitle>При удостоверении смешанных договоров УПТХ взимается единократно по самой высокой стоимости УПТХ договоров.</TariffListNotePointTitle>
          <TariffListNotePointTitle>При удостоверении факта принятия решения органом управления юридического лица и о составе участников (членов) этого включать в себя: </TariffListNotePointTitle>
          <TariffListNotePointText>Подготовка к присутствию на заседании органа управления юридического лица - 4 500 рублей (пункт 41);</TariffListNotePointText>
          <TariffListNotePointText>Присутствие на заседании органа управления юридического лица - 2 990 рублей за каждый час присутствия нотариуса на заседании соответствующего органа (пункт 34);</TariffListNotePointText>
          <TariffListNotePointText> Выдача свидетельства об удостоверении факта) принятия решения органом управления юридического лица и о составе участников (членов) этого органа, присутствовавших при принятии данного решения - 1 500 рублей (пункт 24).</TariffListNotePointText>
        </TariffListNote>
      </TariffListWrapper>
    )
  }
}

const TariffListWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TariffListContainer = styled.div`
  display: flex;

  @media ${responsive.tablet} {
    flex-direction: column;
  }
`;

const TariffListTitle = styled.div`
  padding: 60px 40px 60px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 600px;
  /* height: 780px; */
  background: #2D2D2D;
  box-sizing: border-box;
`;

const TariffListTitleElement = styled.span`
  font-size: 16px;
  height: 60px;
  line-height: 30px;
  font-family: Montserrat Bold;
  text-align: right;
  letter-spacing: 0.05em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
  
  &:hover{
    color: #E6B980;
    cursor: pointer;
  }
  
`;

const TariffListDescription = styled.div`
  max-width: 556px;
  padding-left: 120px;

  @media ${responsive.tablet} {
    padding-left: 20px;
  }
`;

const TariffListTitleImg = styled.img`
  margin-right: 10px;
`;

const TariffListNote = styled.div`
  max-width: 1109px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const TariffListNoteTitle = styled.span`
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  margin-bottom: 50px; 
`;

const TariffListNotePointTitle = styled.span`
  font-family: Montserrat Regular;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;

  &:before{
    content: '';
    width: 10px;
    height: 10px;
    background: #E6B980;
    display: block;
    position: relative;
    border-radius: 20px;
    top: 20px;
    left: -20px;
  }
`;

const TariffListNotePointText = styled.span`
  font-family: Montserrat Regular;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  opacity: .7;
  margin-left: 5px;

  &:before{
    top: 18px;
    left: -12px;
    content: '';
    width: 5px;
    height: 5px;
    background: #E6B980;
    display: block;
    position: relative;
    border-radius: 20px;
    background: #2D2D2D;
  }
`;




