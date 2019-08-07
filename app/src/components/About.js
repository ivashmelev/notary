import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import Button from './Button'
import styled from 'styled-components'
import responsive from '../responsive'
import openCite from '../assets/img/openCite.svg';
import closeCite from '../assets/img/closeCite.svg';


export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <Header backgroundImg='about' />
        <Title text='О НАС' />
        <AboutContent>
          <AboutContentText>
            <AboutContentColumn>
              <AboutParagraph>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.</AboutParagraph>
              <AboutParagraph>Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения систем массового участия.</AboutParagraph>
            </AboutContentColumn>
            <AboutContentColumn>
              <AboutCite>
                Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
            </AboutCite>
              <AboutCiteAuthor>
                Пережогина А. Ю.
              </AboutCiteAuthor>
            </AboutContentColumn>
          </AboutContentText>
          <AboutButton>
            <Button name='Запись на прием' />
          </AboutButton>
        </AboutContent>
      </AboutWrapper>
    )
  }
}

const AboutWrapper = styled.div``;
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

const AboutContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 529px;
`;

const AboutParagraph = styled.span`
  font-family: Montserrat Regular;
  font-size: 18px;
  color: #2D2D2D;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-align: justify;
  margin-top: 20px;
`;

const AboutCite = styled.span`
  width: 400px;
  font-family: Montserrat Regular Italic;
  font-size: 18px;
  color: #2D2D2D;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-align: justify;
  margin-top: 20px;
  font-weight: 600;

  &::before{
    content: '';
    position: relative;
    background-image: url(${openCite});
    width: 33px;
    height: 25px;
    display: block;
    background-repeat: no-repeat;
    left: -40px;
  }

  &::after{
    content: '';
    position: relative;
    background-image: url(${closeCite});
    width: 33px;
    height: 25px;
    display: block;
    background-repeat: no-repeat;
    left: 400px;
  }
`;

const AboutCiteAuthor = styled.span`
  margin-top: 25px;
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
`;


const AboutButton = styled.div`
  margin-top: 50px;
`;

