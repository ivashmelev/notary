import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
// import Button from './Button'
import Navigation from './Navigation'
import styled from 'styled-components'
import responsive from '../responsive'
// import openCite from '../assets/img/openCite.svg';
// import closeCite from '../assets/img/closeCite.svg';
import personImg from '../assets/img/person.png';



export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <Header backgroundImg='about' />
        <Title text='НОТАРИУС' />
        <AboutContent>
          <AboutPersonWrapper>
            <AboutPersonPortret>
              <AboutPersonPortretBack />
              <AboutPersonPortretImg src={personImg} />
            </AboutPersonPortret>
            <AboutPersonBiography>
              <PersonBiographyTitle>Кондратьева Екатерина Алексеевна</PersonBiographyTitle>
              <PersonBiographySubTitle>Юрист</PersonBiographySubTitle>
              <PersonBiographyDescription>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
              </PersonBiographyDescription>
            </AboutPersonBiography>
          </AboutPersonWrapper>
        </AboutContent>
        <Navigation title='ДЕЙСТВИЯ' subtitle='СЛЕДУЮЩИЙ РАЗДЕЛ' />
      </AboutWrapper>
    )
  }
}

const PersonBiographyDescription = styled.div`
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
    letter-spacing: 0em;
  }
`
const PersonBiographySubTitle = styled.div`
  font-family: Montserrat Bold;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #2D2D2D;
  margin: 0 0 20px;
  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
  }
`
const PersonBiographyTitle = styled.div`
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.05em;
  color: #E6B980;
  margin: 0 0 30px;
  @media ${responsive.tablet} {
    font-size: 18px;
    line-height: 30px;
  }
  @media ${responsive.tablet} {
    font-size: 20px;
    line-height: 25px;
    margin: 0 0 20px;
  }
`
const AboutPersonBiography = styled.div`
  width: 500px;
  padding: 35px 0;
  @media ${responsive.tablet} {
    max-width: 500px;
    width: 100%;
    padding: 20px 0;
  }
`
const AboutPersonPortretImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`
const AboutPersonPortretBack = styled.div`
  width: 368px;
  height: 526px;
  background: #2D2D2D;
  position: absolute;
  top: 0; left: 0;
  @media ${responsive.tablet} {
    display: none;
  }
`
const AboutPersonPortret = styled.div`
  width: 368px;
  height: 526px;
  padding: 35px;
  position: relative;
  @media ${responsive.tablet} {
    max-width: 345px;
    width: 100%;
    height: 400px;
    padding: 0;
  }
`
const AboutPersonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${responsive.tabletB} {
    flex-direction: column;
    align-items: center;
  }
`
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

// const AboutContentText = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   @media ${responsive.notebookS} {
//     flex-direction: column;
//   }
// `;

// const AboutContentColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 560px;
//   width: 100%;
//   align-items: flex-end;
//   @media ${responsive.notebookS} {
//     max-width: 100%;
//     align-items: center;
//   }
// `;

// const AboutParagraph = styled.p`
//   font-family: Montserrat Regular;
//   font-size: 18px;
//   color: #2D2D2D;
//   line-height: 34px;
//   letter-spacing: 0.05em;
//   text-align: left;
//   margin: 0 0 20px 0;
//   @media ${responsive.tablet} {
//     font-size: 16px;
//     line-height: 25px;
//     letter-spacing: 0;
//   }
// `;

// const AboutCite = styled.div`
//   width: 400px;
//   font-family: Montserrat Regular Italic;
//   font-size: 18px;
//   color: #2D2D2D;
//   line-height: 34px;
//   letter-spacing: 0.05em;
//   text-align: left;
//   font-weight: 600;
//   padding: 25px 40px;
//   position: relative;

//   &::before{
//     content: '';
//     position: absolute;
//     background-image: url(${openCite});
//     width: 35px;
//     height: 25px;
//     display: block;
//     background-repeat: no-repeat;
//     left: 0;
//     top: 0;
//   }

//   &::after{
//     content: '';
//     position: absolute;
//     background-image: url(${closeCite});
//     width: 35px;
//     height: 25px;
//     display: block;
//     background-repeat: no-repeat;
//     bottom: 0;
//     right: 0;
//   }

//   @media ${responsive.tablet} {
//     font-size: 16px;
//     line-height: 25px;
//     padding: 25px 15px;
//     max-width: 400px;
//     width: 100%;
//     box-sizing: border-box;
//   }

// `;

// const AboutCiteAuthor = styled.p`
//   width: 400px;
//   font-family: Montserrat Bold;
//   font-size: 20px;
//   line-height: 34px;
//   letter-spacing: 0.05em;
//   color: #2D2D2D;
//   padding: 0 40px;
//   margin: 0;

//   @media ${responsive.tablet} {
//     padding: 0 15px;
//     max-width: 400px;
//     width: 100%;
//   }
// `;


// const AboutButton = styled.div`
//   width: 100%;
//   margin: 30px 0 0 0;
//   @media ${responsive.notebookS} {
//     margin: 30px 0 65px 0;
//   }
// `;

