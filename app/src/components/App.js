import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../helpers/history'
import Main from './Main'
import About from './About'

const Site = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <Site {...this.props} />
  }
}
