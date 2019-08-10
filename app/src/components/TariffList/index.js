import React, { Component } from 'react'
import TariffElement from '../TariffElement'
import Navigation from '../Navigation/index'
import styled from 'styled-components'
import responsive from '../../responsive'
import backImg from '../../assets/img/back.png'
import ellipse from '../../assets/img/ellipse.png'

export default class TariffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '0'
    }
  }

  render() {
    const { tariff } = this.props;
    return (
      <TariffListWrapper tariff={tariff}>
        <TariffListContainer>
          <TariffListTitleWrap>
            <TariffListTitle>
              <TariffListTitleElement
                onClick={() => this.props.onReturnBack(false)}
              >
                <TariffListTitleImg src={backImg} />
                Назад
            </TariffListTitleElement>
              {tariff.map((element, index, array) =>
                this.state.current === element.id ?
                  <TariffListTitleElement
                    key={index}
                    style={{ color: '#E6B980' }}
                    onClick={() => {
                      this.setState({ current: element.id });
                    }}
                  >
                    {element.title}
                  </TariffListTitleElement>
                  :
                  <TariffListTitleElement
                    key={index}
                    onClick={() => {
                      this.setState({ current: element.id });
                    }}
                  >
                    {element.title}
                  </TariffListTitleElement>
              )}
            </TariffListTitle>
          </TariffListTitleWrap>
          <TariffListDescriptionWrap>
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
          </TariffListDescriptionWrap>
        </TariffListContainer>
        <TariffListNote>
          <TariffListNoteTitle>Примечание</TariffListNoteTitle>
          <TariffListNoteUl>
            <TariffListNoteTitleLi>Освобождаются от уплаты УПТХ:</TariffListNoteTitleLi>
            <TariffListNoteDitailUl>
              <TariffListNoteTitleDitailLi>Участники и инвалиды ВОВ – на 100 %;</TariffListNoteTitleDitailLi>
              <TariffListNoteTitleDitailLi>Инвалиды 1 группы – на 50 %;</TariffListNoteTitleDitailLi>
              <TariffListNoteTitleDitailLi>Дети-сироты и дети, оставшиеся без попечения родителей, помещенные под надзор в организации для детей-сирот и детей, оставшихся без попечения родителей – на 100 %;</TariffListNoteTitleDitailLi>
              <TariffListNoteTitleDitailLi>Несовершеннолетние при отчуждении недвижимого имущества пропорционально их участию в договоре;</TariffListNoteTitleDitailLi>
              <TariffListNoteTitleDitailLi>Органы гос. власти и МСУ при выдаче свидетельств на выморочное имущество;</TariffListNoteTitleDitailLi>
            </TariffListNoteDitailUl>

            <TariffListNoteTitleLi>При удостоверении смешанных договоров УПТХ взимается единократно по самой высокой стоимости УПТХ договоров.</TariffListNoteTitleLi>
            <TariffListNoteTitleLi>При удостоверении факта принятия решения органом управления юридического лица и о составе участников (членов) этого включать в себя:</TariffListNoteTitleLi>
            <TariffListNoteDitailUl>
              <TariffListNoteTitleDitailLi>Подготовка к присутствию на заседании органа управления юридического лица - 4 500 рублей (пункт 41);</TariffListNoteTitleDitailLi>
              <TariffListNoteTitleDitailLi>Присутствие на заседании органа управления юридического лица - 2 990 рублей за каждый час присутствия нотариуса на заседании соответствующего органа (пункт 34);</TariffListNoteTitleDitailLi>
              <TariffListNoteTitleDitailLi>Выдача свидетельства об удостоверении факта) принятия решения органом управления юридического лица и о составе участников (членов) этого органа, присутствовавших при принятии данного решения - 1 500 рублей (пункт 24).</TariffListNoteTitleDitailLi>
            </TariffListNoteDitailUl>
          </TariffListNoteUl>
        </TariffListNote>
      </TariffListWrapper>
    )
  }
}

const TariffListNoteUl = styled.ul`
  font-family: Montserrat Regular;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  margin: 0;
  padding: 0 15px 0 25px;
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
  }
`
const TariffListNoteDitailUl = styled.ul`
  padding: 0 0 0 20px;
`

const TariffListNoteTitleLi = styled.li`
  list-style-image: url(${ellipse});
  font-family: Montserrat Medium;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
    margin: 10px 0;
  }
`
const TariffListNoteTitleDitailLi = styled.li`
  list-style-type: disc;
`
const TariffListWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TariffListContainer = styled.div`
  display: flex;

  @media ${responsive.tabletB} {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;

const TariffListTitle = styled.div`
  width: 100%;
  padding: 60px 40px 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #2D2D2D;
  box-sizing: border-box;
  @media ${responsive.notebook} {
    padding: 60px 40px 60px 30px;
  }
  @media ${responsive.tabletB} {
    padding: 40px 30px 0 30px;
    align-items: flex-start;
  }
  @media ${responsive.tablet} {
    padding: 30px 15px 0 15px;
  }
`;

const TariffListTitleWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 0 120px 0 0;
  @media ${responsive.tabletB} {
    width: 100%;
    padding: 0;
    padding: 0 0 50px 0;
    background: #2D2D2D;
  }
`

const TariffListDescriptionWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  @media ${responsive.notebook} {
    padding: 0 30px 0 0;
  }
  @media ${responsive.tabletB} {
    width: 100%;
    padding: 0 30px 50px 30px;
  }
  @media ${responsive.tablet} {
    padding: 0 15px 0 15px;
  }
`

const TariffListTitleElement = styled.span`
  max-width: 520px;
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  font-family: Montserrat Bold;
  text-align: right;
  letter-spacing: 0.05em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
  
  &:hover{
    color: #E6B980;
    cursor: pointer;
  }

  @media ${responsive.tabletB} {
    max-width: 100%;
    text-align: left;
    justify-content: flex-start;
  }
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
  }
  
`;

const TariffListDescription = styled.div`
  max-width: 556px;

  @media ${responsive.tabletB} {
    max-width: 100%;
  }
`;

const TariffListTitleImg = styled.img`
  margin-right: 10px;
`;

const TariffListNote = styled.div`
  max-width: 1155px;
  width: 100%;
  margin: auto;
  padding: 100px 0 200px 0;
  display: flex;
  flex-direction: column;
  @media ${responsive.tablet} {
    padding: 50px 0 150px 0;
  }
`;

const TariffListNoteTitle = styled.span`
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  margin-bottom: 50px; 
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
    margin-bottom: 40px;
  }
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




