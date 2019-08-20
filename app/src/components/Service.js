import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import Navigation from './Navigation'
import ServiceList from './ServiceList'
import styled from 'styled-components'


export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }

  render() {
    return (
      <ServiceWrapper>
        <Header backgroundImg='service' />
        <Title text='УСЛУГИ' />
        <ServiceList />
        <Navigation title='ТАРИФЫ' subtitle='СЛЕДУЮЩИЙ РАЗДЕЛ' />
      </ServiceWrapper>
    )
  }
}

const ServiceWrapper = styled.div``;
