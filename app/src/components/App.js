import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../helpers/history'
import Main from './Main'
import About from './About'
import Service from './Service'
import Tariff from './Tariff'
import Contact from './Contact'

const Site = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/tariff" component={Tariff} />
      </Switch>
    </Router>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: []
    }
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch('http://api.loc/api/v1/routes/section.php');
        if (await response.ok) {
          this.setState({ page: await response.json() });
          console.log(this.state.page)
        }
      } catch (err) {
        throw err;
      }
    })();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/tariff" component={Tariff} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    )
  }
}
