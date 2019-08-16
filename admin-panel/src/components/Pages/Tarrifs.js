import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'

class Tariffs extends Component {
  render() {
    return (
      <TariffsWrapper>
        <Title title='Тарифы' nextTitle='' icon='' onDoThis/>
      </TariffsWrapper>
    );
  }
}

export default Tariffs

const TariffsWrapper = styled.div`
  width: 100%;
`