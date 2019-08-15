import React, { Component } from 'react'
import styled from 'styled-components'
import Service from '../Service'

import Title from '../Header/Title'

  class Services extends Component {
  render() {
    return (
      <ServicesWrapper>
        <Title />
        <Service />
        УСЛУГИ
      </ServicesWrapper>
    );
  }
}

export default Services

const ServicesWrapper = styled.div`
  width: 100%;
`