import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../helpers/history'
import styled from 'styled-components'
import Header from './Header'
import Navigation from './Navigation';

import MainPage from './Pages/MainPage'
import TwoPage from './Pages/TwoPage'
import Service from './Service'

const Site = () => {
  return (
    <RootContainer>
      <Header />
      <Container>
        <ContainerNavigation>
          <Navigation />
        </ContainerNavigation>
        <ContainerContent>
          <Service />
        </ContainerContent>
      </Container>
      {/* <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/1" component={TwoPage} />
        </Switch>
      </Router> */}
    </RootContainer>
  )
}

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
  margin: 15px;
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