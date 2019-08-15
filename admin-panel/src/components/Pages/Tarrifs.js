import React, { Component } from 'react'
import styled from 'styled-components'

class Tariffs extends Component {
  render() {
    return (
      <TariffsWrapper>
        ТАРИФЫ
      </TariffsWrapper>
    );
  }
}

export default Tariffs

const TariffsWrapper = styled.div`
  width: 100%;
`