import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'
import InfoLine from '../CommonUI/InfoLine'

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: '0',
          name: 'Александр',
          date: '21.08.2019',
          mail: 'alex@gmail.com',
          phone: '+7(954)159-5211',
          comment: ''
        },
        {
          id: '1',
          name: 'Василий',
          date: '',
          mail: 'vasiliy@mail.ru',
          phone: '+7(954)159-5211',
          comment: 'Хотел коммент получать? Сосать!'
        },
        {
          id: '2',
          name: 'Анастасия',
          date: '21.08.2019',
          mail: 'nastya.kulagina@mail.ru',
          phone: '+7(954)159-5211',
          comment: ''
        },
        {
          id: '3',
          name: 'Александр',
          date: '',
          mail: 'alex@gmail.com',
          phone: '+7(954)159-5211',
          comment: 'Как же вы заебали, лицемерные мрази, что лезут к нам - в юриспруденцию.'
        },
      ]
    }
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('https://foxstudio.site/api/v2/routes/reception.php');
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