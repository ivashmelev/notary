import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'


class Contacts extends Component {
  render() {
    return (
      <ContactsWrapper>
        <Title title='Контакты' nextTitle='' icon='' onDoThis/>
      </ContactsWrapper>
    );
  }
}

export default Contacts

const ContactsWrapper = styled.div`
  width: 100%;
`