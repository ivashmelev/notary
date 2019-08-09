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
        <ContactContainer>
          <Form />
          <MapContact contact={this.state.contact} />
        </ContactContainer>
      </ContactWrapper>
    )
  }
}

const ContactWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-bottom: 134px;

  @media ${responsive.tablet} {
    margin-bottom: 0;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${responsive.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
