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
import Info from './Information'
import Login from './Login'


// import Service from './Service'

const Site = () => {
  const navigation = [
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
      title: 'Записи на прием',
      link: '/appointment'
    },
    {
      title: 'Пользователи',
      link: '/users'
    }
  ]
  return (
    
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
              <Route exact path="/appointment" component={Appointment} />
              <Route exact path="/users" component={Users} />
            </Switch>
          </Router>
        </ContainerContent>
        <Info />
      </Container>
    
  )
}

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: true
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView() {
    this.setState({ token: !this.state.token})
  }

  render() {
    const { token } = this.state
    console.log(this.props, 'HELLO');

    return (
      <RootContainer>
        {
          token ? (
            <RootContainer>
              <Header onChangeView={this.changeView}/>
              <Site {...this.props} />
            </RootContainer>
          ) : (
            <Login onChangeView={this.changeView}/>
          )
        }
      </RootContainer>
    )
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
  display: flex;
  flex-flow: column;
`