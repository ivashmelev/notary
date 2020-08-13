import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import Navigation from './Navigation'
import ServiceList from './ServiceList'
import styled from 'styled-components'
import { Scrollbar } from './Scrollbar'


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
        <Scrollbar>
          <ServiceContent>
            <Header backgroundImg='service' />
            <Title text='НОТАРИАЛЬНЫЕ ДЕЙСТВИЯ' />
            <ServiceList />
            <Navigation title='ТАРИФЫ' subtitle='СЛЕДУЮЩИЙ РАЗДЕЛ' />
          </ServiceContent>
        </Scrollbar>
      </ServiceWrapper>
    )
  }
}

const ServiceContent = styled.div`
  width: 100%;
`

const ServiceWrapper = styled.div`
  width: 100%;
  position: relative;
  height:  100vh;
`;
