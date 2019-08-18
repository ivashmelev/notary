import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../helpers/history'
import styled from 'styled-components'
import Header from './Header'
import Navigation from './Navigation';

import Services from './Pages/Services'
import Tariffs from './Pages/Tarrifs'
import Appointment from './Pages/Appointment'
import Users from './Pages/Users'
import Contacts from './Pages/Contacts'


// import Service from './Service'

const Site = () => {
  const navigation = [
    {
      title: 'Записи на прием',
      link: '/'
    },
    {
      title: 'Услуги',
      link: '/services'
    },
    {
      title: 'Тарифы',
      link: '/tariffs'
    },
    {
      title: 'Контакты',
      link: '/contacts'
    },
    {
      title: 'Пользователи',
      link: '/users'
    }
  ]
  return (
    <RootContainer>
      <Header />
      <Container>
        <ContainerNavigation>
          <Navigation navigation={navigation} />
        </ContainerNavigation>
        <ContainerContent>
          <Router history={history}>
            <Switch>
              <Route exact path="/services" component={Services} />
              <Route exact path="/tariffs" component={Tariffs} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/" component={Appointment} />
              <Route exact path="/users" component={Users} />
            </Switch>
          </Router>
        </ContainerContent>
      </Container>
    </RootContainer>
  )
}

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return <Site {...this.props} />
  }
}

const ContainerNavigation = styled.div`
  width: 250px;
  height: 100%;
  position: relative;
`
const ContainerContent = styled.div`
  width: 100%;
  padding: 15px 15px;
  background: #FFFFFF;
  overflow: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
const RootContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cccccc;
  display: flex;
  flex-flow: column;
`