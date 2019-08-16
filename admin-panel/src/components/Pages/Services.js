import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'

class Services extends Component {
  render() {
    return (
      <ServicesWrapper>
        <Title title='Услуги' nextTitle='' icon='' onDoThis/>
      </ServicesWrapper>
    );
  }
}

export default Services

const ServicesWrapper = styled.div`
  width: 100%;
`