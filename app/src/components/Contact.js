import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../responsive'
import Header from './Header'
import Title from './Title'
import Form from './Form'
import MapContact from './MapContact'


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
        const response = await fetch('http://api.loc/api/v1/routes/contact.php');
        if (await response.ok) {
          this.setState({ contact: await response.json() });
          console.log(this.state.contact)
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
            <ContactLink href='http://www.nnp52.ru' target='_blank'>Нижегородская областная нотариальная палата</ContactLink>
          </ContactLinkContainer>
        </ContactPageWrap>
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
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`;


