import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'
import Sidebar from '../Sidebar'
import Wall from '../Wall'
import _ from 'lodash'
import { UPDATE_CONTACT } from '../../helpers/constants'

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      current: 0
    }
    this.setActive = this.setActive.bind(this);
    this.handleChangeContacts = this.handleChangeContacts.bind(this);
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('https://notary-nn.ru/api/v2/routes/contact.php');
        if (await response.ok) {
          this.setState({ contacts: await response.json() });
        }
      })();
    } catch (err) {
      throw err;
    }
  }

  handleChangeContacts(data, current) {
    const newContacts = [...this.state.contacts];
    newContacts[current] = data;
    this.setState((state, props) => {
      return {
        contacts: newContacts
      }
    });
  }

  setActive(value) {
    this.setState({ current: value });
  }

  render() {
    return (
      <ContactsWrapper>
        <Title title='Контакты' nextTitle='' icon='' onDoThis />
        <ContactsContainer>
          <ContactsContainerSidebar>
            {this.state.contacts.map((element, index) =>
              <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={`Контакты часть ${index + 1}`} onSetActive={this.setActive} />
            )}
          </ContactsContainerSidebar>
          <ContactsContainerWall>
            {!_.isEmpty(this.state.contacts) ?
              <Wall
                event={UPDATE_CONTACT}
                data={this.state.contacts[this.state.current]}
                onHandleChangeServices={this.handleChangeContacts}
                current={this.state.current}
              /> : null
            }
          </ContactsContainerWall>
        </ContactsContainer>
      </ContactsWrapper>
    );
  }
}

export default Contacts

const ContactsWrapper = styled.div`
  width: 100%;
`
const ContactsContainer = styled.div`
  display: flex;
`;

const ContactsContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 315px;
`;

const ContactsContainerWall = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 5px 0;
`;
