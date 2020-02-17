import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'
import InfoLine from '../CommonUI/InfoLine'

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('https://notary-nn.ru/api/v2/routes/reception.php');
        if (await response.ok) {
          this.setState({ users: await response.json() })
        }
      })();
    } catch (err) {
      throw err;
    }
  }

  render() {
    const { users } = this.state
    return (
      <AppointmentWrapper>
        <Title title='Записи на прием' nextTitle='' icon='' onDoThis />
        <AppointmentContainer>
          <InfoLine page='appointment' infoLine={users} />
        </AppointmentContainer>
      </AppointmentWrapper>
    );
  }
}

export default Appointment

const AppointmentContainer = styled.div`
  width: 100%;
  padding: 15px 0;
`
const AppointmentWrapper = styled.div`
  width: 100%;
`