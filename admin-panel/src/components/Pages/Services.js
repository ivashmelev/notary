import React, { Component } from 'react'
import styled from 'styled-components'
import Service from '../Service'


class Services extends Component {
  render() {
    return (
      <ServicesWrapper>
        <Service />
      </ServicesWrapper>
    );
  }
}

export default Services

const ServicesWrapper = styled.div`
  width: 100%;
`