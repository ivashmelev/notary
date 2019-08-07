import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../helpers/history'
import Main from './Main'

const Site = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
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
