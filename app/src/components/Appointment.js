import React, { Component } from 'react';
import styled from 'styled-components'
import backgroundImg from '../assets/img/backgroundImgMain.png'
import closeImg from '../assets/img/close.png'
import checkImg from '../assets/img/check.png'
import responsive from '../responsive'
import history from '../helpers/history'
import Calendar from 'react-calendar'
import moment from 'moment';
import { validateEmail, formattedPhone, validatePhone, isFieldNotEmpty } from '../helpers/format'
import _ from 'lodash'

const SCREEN_CALENDAR = 'SCREEN_CALENDAR'
const SCREEN_FORM = 'SCREEN_FORM'
export default class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: SCREEN_CALENDAR,
      agreement: true,
      today: new Date(),
      date: new Date(),
      name: '',
      phone: '',
      mail: '',
      localErrors: {},
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAppointmentInfo = this.handleAppointmentInfo.bind(this)

  }
  // date = moment(date).format('YYYY-MM-DD');
  componentDidMount() {
    let { date } = this.state
    if (date.getDay() === 6) {
      date = moment().add('days', 2);
    } else if (date.getDay() === 5) {
      date = moment().add('days', 3);
    } else {
      date = moment().add('days', 1);
    }
    this.setState({ date: date._d })
  }

  handleScreen(value) {
    this.setState({ screen: value })
  }
  handleAgreement() {
    this.setState({ agreement: !this.state.agreement })
  }
  onChange = (date) => {
    this.setState({ date })
  }
  handleTextChange(e) {
    this.setState(e)
  }

  validateUpdateUserInfo() {
    let errors = {}
    const { name, phone, mail } = this.state
    if (!isFieldNotEmpty(name)) {
      errors = { ...errors, nameError: 'Введите имя' }
    }
    if (!isFieldNotEmpty(phone)) {
      errors = { ...errors, phoneError: 'Введите номер' }
    } else if (!validatePhone(phone)) {
      errors = { ...errors, phoneError: 'Введите корректный номер' }
    }
    if (!isFieldNotEmpty(mail)) {
      errors = { ...errors, mailError: 'Введите email' }
    } else if (!validateEmail(mail)) {
      errors = { ...errors, mailError: 'Введите корректный email' }
    }
    return errors
  }

  cleanState() {
    this.setState((state, props) => {
      return {
        agreement: true,
        name: '',
        phone: '',
        mail: '',
        localErrors: {},
      }
    })
    history.goBack()
  }


  async handleAppointmentInfo(e) {
    const localErrors = this.validateUpdateUserInfo()
    if (_.isEmpty(localErrors)) {
      if (!_.isEmpty(this.state.localErrors)) {
        this.setState({ localErrors: {} })
      }
      const { date, name, phone, mail } = this.state
      const correctdate = moment(date).format('YYYY-MM-DD');
      (async () => {
        try {
          const response = await fetch('https://foxstudio.site/api/v2/routes/reception.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/text',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `date=${correctdate}&name=${name}&phone=${phone}&mail=${mail}`,
          });
          if (response.ok) {
            alert(`Вы записались на прием`);
            this.cleanState()
          }
        } catch (err) {
          throw err;
        }
      })();

    } else {
      this.setState({ localErrors })
    }
  }

  render() {
    const { localErrors, screen, agreement, date, today, name, phone, mail } = this.state
    console.log(localErrors);
    return (
      <AppointmentWrapper>
        <AppointmentBackground />
        <AppointmentCloseButton src={closeImg} onClick={() => history.goBack()} />
        <AppointmentContainer>
          <AppointmentContainerTitle>Запись на прием</AppointmentContainerTitle>
          {
            screen === SCREEN_CALENDAR ? (
              <AppointmentContainerScreen>
                <AppointmentContainerSubTitle>Выберите дату</AppointmentContainerSubTitle>
                <AppointmentContainerCalendar>
                  <Calendar
                    onChange={this.onChange}
                    value={date}
                    tileDisabled={({ date }) => date.getDay() === 6 || date.getDay() === 0 || date < today}
                  />
                </AppointmentContainerCalendar>
                <AppointmentContainerButton
                  onClick={() => this.handleScreen(SCREEN_FORM)}
                >Далее
                  </AppointmentContainerButton>
              </AppointmentContainerScreen>
            ) : (
                <AppointmentContainerScreen>
                  <AppointmentContainerSubTitle>Введите данные</AppointmentContainerSubTitle>
                  <AppointmentInputError>
                    {
                      localErrors.nameError ? (
                        localErrors.nameError
                      ) : null
                    }
                  </AppointmentInputError>
                  <AppointmentInput
                    value={name}
                    errorValue={localErrors.nameError ? '#ff6363' : '#ffffff'}
                    onChange={e => this.handleTextChange({ name: e.target.value })}
                    type='text'
                    name='name'
                    required
                    placeholder='Имя' />
                  <AppointmentInputError>
                    {
                      localErrors.phoneError ? (
                        localErrors.phoneError
                      ) : null
                    }
                  </AppointmentInputError>
                  <AppointmentInput
                    value={phone}
                    errorValue={localErrors.phoneError ? '#ff6363' : '#ffffff'}
                    type='text'
                    name='phone'
                    required
                    placeholder='+7 (___) ___ ____'
                    onChange={e => {
                      this.setState({ phone: formattedPhone(e.target.value) })
                    }} />
                  <AppointmentInputError>
                    {
                      localErrors.mailError ? (
                        localErrors.mailError
                      ) : null
                    }
                  </AppointmentInputError>
                  <AppointmentInput
                    value={mail}
                    errorValue={localErrors.mailError ? '#ff6363' : '#ffffff'}
                    onChange={e => this.handleTextChange({ mail: e.target.value })}
                    type='email'
                    name='mail'
                    required
                    placeholder='mail@example.ru' />
                  <AppointmentChecked onClick={() => this.handleAgreement()}>
                    <AppointmentCheckedBox>
                      {
                        agreement ? (
                          <AppointmentCheckedLine src={checkImg} />
                        ) : null
                      }
                    </AppointmentCheckedBox>
                    <AppointmentCheckedLabel>
                      Согласен на обработку персональных данных
                    </AppointmentCheckedLabel>
                  </AppointmentChecked>
                  <AppointmentContainerButton
                    active={agreement ? '1' : '0.5'}
                    cursor={agreement ? 'pointer' : 'default'}
                    onClick={agreement ? () => this.handleAppointmentInfo() : null}
                  >Отправить
                  </AppointmentContainerButton>
                </AppointmentContainerScreen>
              )
          }

          <AppointmentProgress>
            <AppointmentProgressLine
              onClick={() => this.handleScreen(SCREEN_CALENDAR)}
              active={screen === SCREEN_CALENDAR ? '1' : '0.5'}
            />
            <AppointmentProgressLine
              active={screen === SCREEN_FORM ? '1' : '0.5'}
            />
          </AppointmentProgress>
        </AppointmentContainer>
      </AppointmentWrapper>
    );
  }
}

const AppointmentInputError = styled.div`
  font-family: Montserrat Regular;
  height: 10px;
  font-size: 8px;
  letter-spacing: 0.05em;
  color: #ff6363;
  display: flex;
  align-items: center;
`
const AppointmentCheckedLabel = styled.div`
  font-family: Montserrat Regular;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  margin: 0 0 0 10px;
`
const AppointmentCheckedLine = styled.img``
const AppointmentCheckedBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AppointmentChecked = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  cursor: pointer;
`
const AppointmentInput = styled.input`
  max-width: 320px;
  width: 100%;
  height: 35px;
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  background: transparent;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid  ${props => props.errorValue ? props.errorValue : '#FFFFFF'};
  outline: none;
  padding: 2px 15px;
  box-sizing: border-box;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #FFFFFF;
    opacity: 0.8;
  }
  :-ms-input-placeholder {
    color: #FFFFFF;
    opacity: 0.5;
  }
  @media ${responsive.tablet} {
    font-size: 16px;
    margin-bottom: 20px
  }
`
const AppointmentContainerScreen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AppointmentProgressLine = styled.div`
  width: 70px;
  height: 2px;
  background: #FFFFFF;
  margin: 0 10px;
  opacity: ${props => props.active};
`
const AppointmentProgress = styled.div`
  display: flex;
`
const AppointmentContainerButton = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  font-family: Montserrat Regular;
  color: #FFFFFF;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
  cursor: ${props => props.cursor ? props.cursor : 'pointer'};
  margin: 50px 0 50px 0;
  opacity: ${props => props.active ? props.active : '1'};
  @media ${responsive.tablet} {
    margin: 30px 0 30px 0;
  }
`
const AppointmentContainerCalendar = styled.div`
  width: 300px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 21px rgba(230, 185, 128, 0.8);
  border-radius: 8px;
  overflow: hidden;
  @media ${responsive.tablet} {
    width: 280px;
  }
`
const AppointmentContainerSubTitle = styled.h2`
  color: #FFFFFF;
  font-family: Montserrat Bold;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 0 0 50px 0;
  @media ${responsive.tablet} {
    font-size: 16px;
    margin: 0 0 25px 0;
  }
`
const AppointmentContainerTitle = styled.h1`
  color: #FFFFFF;
  font-family: Montserrat_Alternates Bold;
  font-size: 36px;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 0 0 50px 0;
  @media ${responsive.tablet} {
    font-size: 18px;
    margin: 0 0 30px 0;
  }
`
const AppointmentContainer = styled.div`
  width: 400px;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AppointmentCloseButton = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  z-index: 15;
  @media ${responsive.tablet} {
    top: 30px;
    right: 18px;
  }
`
const AppointmentBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  top: 0;
  filter: blur(185px);
`
const AppointmentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2D2D2D;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`