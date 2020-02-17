import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../responsive'
import Header from './Header'
import Title from './Title'
import Form from './Form'
import MapContact from './MapContact'
import Developer from './Developer'


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: []
    }
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch('https://notary-nn.ru/api/v2/routes/contact.php');
        if (await response.ok) {
          this.setState({ contact: await response.json() })
        }
      } catch (err) {
        throw err;
      }
    })();
  }

  render() {
    return (
      <ContactWrapper>
        <Header backgroundImg='contact' />
        <Title text='КОНТАКТЫ' />
        <ContactPageWrap>
          <ContactContainer>
            <Form />
            <MapContact contact={this.state.contact} />
          </ContactContainer>
          <ContactLinkContainer>
            <ContactLinkTitle>Полезные ссылки</ContactLinkTitle>
            <ContactLink href='https://minjust.ru/' target='_blank'>Министерство юстиций Российской Федерации</ContactLink>
            <ContactLink href='https://to52.minjust.ru/' target='_blank'>Главное управление министерства юстиции РФ по Нижегородской области</ContactLink>
            <ContactLink href='https://notariat.ru' target='_blank'>Федеральная нотариальная палата</ContactLink>
            <ContactLink href='https://www.nnp52.ru' target='_blank'>Нижегородская областная нотариальная палата</ContactLink>
          </ContactLinkContainer>
        </ContactPageWrap>
        <Developer/>
      </ContactWrapper>
    )
  }
}

const ContactPageWrap = styled.div`
  width: 100%;
  padding: 0 0 185px 0;
  @media ${responsive.tablet} {
    padding: 0 0 50px 0;
  }
`;

const ContactWrapper = styled.div``;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${responsive.notebookS} {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 83px;
  padding: 0 15px;
`;
const ContactLinkTitle = styled.span`
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 50px;
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`;

const ContactLink = styled.a`
  font-family: Montserrat Regular;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 30px;
  text-decoration: none;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover{
    opacity: .7;
  }
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`;


