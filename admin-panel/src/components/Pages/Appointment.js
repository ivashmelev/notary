import React, { Component } from 'react'
import styled from 'styled-components'

class Appointment extends Component {
  render() {
    return (
      <AppointmentWrapper>
        ЗАПИСИ НА ПРИЕМ
      </AppointmentWrapper>
    );
  }
}

export default Appointment

const AppointmentWrapper = styled.div`
  width: 100%;
`