import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import Button from './Button'
import Navigation from './Navigation'
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
              <AboutButton>
                <Button name='Запись на прием' link/>
              </AboutButton>
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
          
        </AboutContent>
        <Navigation title='УСЛУГИ' subtitle='СЛЕДУЮЩИЙ РАЗДЕЛ' />
      </AboutWrapper>
    )
  }
}

const AboutWrapper = styled.div``;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1260px;
  box-sizing: border-box;
  width: 100%;
  padding: 0 30px 200px 30px;
  margin: auto;
  @media ${responsive.notebook} {
    width: 100%
  }
  @media ${responsive.mobileS} {
    padding: 0 15px 150px 15px;
  }
`;

const AboutContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${responsive.notebookS} {
    flex-direction: column;
  }
`;

const AboutContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  width: 100%;
  align-items: flex-end;
  @media ${responsive.notebookS} {
    max-width: 100%;
    align-items: center;
  }
`;

const AboutParagraph = styled.p`
  font-family: Montserrat Regular;
  font-size: 18px;
  color: #2D2D2D;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-align: left;
  margin: 0 0 20px 0;
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
  }
`;

const AboutCite = styled.div`
  width: 400px;
  font-family: Montserrat Regular Italic;
  font-size: 18px;
  color: #2D2D2D;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-align: left;
  font-weight: 600;
  padding: 25px 40px;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    background-image: url(${openCite});
    width: 35px;
    height: 25px;
    display: block;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
  }

  &::after{
    content: '';
    position: absolute;
    background-image: url(${closeCite});
    width: 35px;
    height: 25px;
    display: block;
    background-repeat: no-repeat;
    bottom: 0;
    right: 0;
  }

  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    padding: 25px 15px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
  }

`;

const AboutCiteAuthor = styled.p`
  width: 400px;
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  padding: 0 40px;
  margin: 0;

  @media ${responsive.tablet} {
    padding: 0 15px;
    max-width: 400px;
    width: 100%;
  }
`;


const AboutButton = styled.div`
  width: 100%;
  margin: 30px 0 0 0;
  @media ${responsive.notebookS} {
    margin: 30px 0 65px 0;
  }
`;

