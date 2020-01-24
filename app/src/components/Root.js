import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../helpers/history'
import App from './App'
import Main from './Main'
// import About from './About'
import Service from './Service'
import Tariff from './Tariff'
import Contact from './Contact'
import SearchPage from './SearchPage'
import Appointment from './Appointment'

const wrap = MainComponent => (
  <App>
    <MainComponent/>
  </App>
)

const Site = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => wrap(Main)} />
        {/* <Route path="/about" render={() => wrap(About)} /> */}
        <Route path="/service" render={() => wrap(Service)} />
        <Route path="/tariff" render={() => wrap(Tariff)} />
        <Route path="/contact" render={() => wrap(Contact)} />
        <Route path="/search/:query?" render={() => wrap(SearchPage)} />
        <Route path="/appointment" render={() => wrap(Appointment)} />
      </Switch>
    </Router>
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