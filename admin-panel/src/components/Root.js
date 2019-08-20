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
      title: 'Записи на прием',
      link: '/admin/'
    },
    {
      title: 'Услуги',
      link: '/admin/services'
    },
    {
      title: 'Тарифы',
      link: '/admin/tariffs'
    },
    {
      title: 'Контакты',
      link: '/admin/contacts'
    },
    {
      title: 'Пользователи',
      link: '/admin/users'
    }
  ]
  return (
    
      <Container>
        <ContainerNavigation>
          <Navigation userName="Ангелина Пережогина" navigation={navigation} />
        </ContainerNavigation>
        <ContainerContent>
          <Router history={history}>
            <Switch>
              <Route exact path="/admin/services" component={Services} />
              <Route exact path="/admin/tariffs" component={Tariffs} />
              <Route exact path="/admin/contacts" component={Contacts} />
              <Route exact path="/admin/" component={Appointment} />
              <Route exact path="/admin/users" component={Users} />
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
      token: false
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView() {
    this.setState({ token: !this.state.token})
  }

  render() {
    const { token } = this.state
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