import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import Navigation from './Navigation'
import styled from 'styled-components'
import { Scrollbar } from './Scrollbar'
import history from '../helpers/history'
import PrivilegesItems from './Privileges/'


export default class Privileges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Льготы'
    }
    this.returnBack = this.returnBack.bind(this)
  }

  returnBack(value) {
    history.push({ pathname: '/tariff' })
  }

  render() {
    return (
      <TariffWrapper>
        <Scrollbar>
          <TariffContent>

            <Header backgroundImg='tariff' />

            <Title text={this.state.title} />

            <TariffContainer>
              <PrivilegesItems />
              <Navigation title='НАЗАД' onReturnBack={this.returnBack} />
            </TariffContainer>

          </TariffContent>
        </Scrollbar>
      </TariffWrapper>
    )
  }
}

const TariffContent = styled.div``

const TariffWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const TariffContainer = styled.div``