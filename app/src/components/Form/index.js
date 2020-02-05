import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import { validateEmail, formattedPhone, validatePhone, isFieldNotEmpty } from '../../helpers/format'
import _ from 'lodash'
// import checkImg from '../../assets/img/check.png'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreement: true,
      name: '',
      phone: '',
      mail: '',
      comment: '',
      localErrors: {},
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAppointmentInfo = this.handleAppointmentInfo.bind(this)
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
        comment: '',
        localErrors: {},
      }
    })
  }

  async handleAppointmentInfo(e) {
    const localErrors = this.validateUpdateUserInfo()
    if (_.isEmpty(localErrors)) {
      if (!_.isEmpty(this.state.localErrors)) {
        this.setState({ localErrors: {} })
      }
      const { name, phone, mail, comment } = this.state;
      try {
        await fetch('https://notary-nn.ru/api/v2/routes/send.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `name=${name}&phone=${phone}&mail=${mail}&comment=${comment}&admin_mail=shmelevivan20@gmail.com`,
          mode: 'cors'
        })
      } catch (err) {
        throw err;
      }
      this.cleanState()
    } else {
      this.setState({ localErrors })
    }
  }


  render() {
    const { localErrors, agreement, name, phone, mail, comment } = this.state
    return (
      <FormWrapper>
        <FormTtileContainer>
          <FormTtile>НАПИСАТЬ</FormTtile>
        </FormTtileContainer>
        <FormContainer>
          <AppointmentInputError>
            {
              localErrors.nameError ? (
                localErrors.nameError
              ) : null
            }
          </AppointmentInputError>
          <FormInput
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
          <FormInput
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
          <FormInput
            value={mail}
            errorValue={localErrors.mailError ? '#ff6363' : '#ffffff'}
            onChange={e => this.handleTextChange({ mail: e.target.value })}
            type='email'
            name='mail'
            required
            placeholder='mail@example.ru' />
          <FormInput
            value={comment}
            onChange={e => this.handleTextChange({ comment: e.target.value })}
            type='text'
            name='comment'
            placeholder='Комментарий'
            />
          {/* <AppointmentChecked onClick={() => this.handleAgreement()}>
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
          </AppointmentChecked> */}
        </FormContainer>
        <FormButtonContainer>
          <FormButton
            active={agreement ? '1' : '0.5'}
            cursor={agreement ? 'pointer' : 'default'}
            onClick={agreement ? () => this.handleAppointmentInfo() : null}
          >ОТПРАВИТЬ</FormButton>
        </FormButtonContainer>
      </FormWrapper>
    )
  }
}

// const AppointmentCheckedLabel = styled.div`
//   font-family: Montserrat Regular;
//   font-size: 10px;
//   line-height: 12px;
//   letter-spacing: 0.05em;
//   color: #FFFFFF;
//   display: flex;
//   align-items: center;
//   margin: 0 0 0 10px;
// `
// const AppointmentCheckedLine = styled.img``
// const AppointmentCheckedBox = styled.div`
//   width: 15px;
//   height: 15px;
//   border: 1px solid #FFFFFF;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
// const AppointmentChecked = styled.div`
//   max-width: 470px;
//   width: 100%;
//   width: 100%;
//   display: flex;
//   cursor: pointer;
//   margin: 0 0 30px;
// `
const AppointmentInputError = styled.div`
  font-family: Montserrat Regular;
  height: 10px;
  font-size: 8px;
  letter-spacing: 0.05em;
  color: #ff6363;
  display: flex;
  align-items: center;
`
const FormWrapper = styled.div`
  left: calc(50% - 665px);
  z-index: 2;
  position: relative;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 560px;
  height: 643px;
  padding: 68px 45px;
  background: #2D2D2D;
  justify-content: center;
  box-shadow: 15px 0px 48px rgba(0, 0, 0, 0.55);

  @media ${responsive.notebookB} {
    width: 430px;
    height: 570px;
    padding: 30px 30px;
    left: 30px;
  }
  @media ${responsive.notebookS} {
    left: 0;
    width: 100%;
    margin: 0;
  }
  @media ${responsive.tablet} {
    padding: 50px 15px;
    height: auto;
  }
  
`;

const FormTtileContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FormTtile = styled.span`
  font-family: Montserrat Regular;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  @media ${responsive.tablet} {
    font-size: 24px;
  }
`;

const FormContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${responsive.tablet} {
    margin-top: 40px;
  }
`;

const FormInput = styled.input`
  max-width: 470px;
  width: 100%;
  height: 40px;
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  background: #2D2D2D;
  margin: ${props => props.margin ? props.margin : '0 0 40px 0'};
  border: none;
  border-bottom: 1px solid  ${props => props.errorValue ? props.errorValue : '#FFFFFF'};
  outline: none;
  padding: 2px 15px;
  box-sizing: border-box;
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${responsive.tablet} {
    left: 0;
    width: 100%;
    margin-top: 0;
  }
`;

const FormButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  background: #2D2D2D;
  outline: none;
  font-family: Montserrat Regular;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  cursor: ${props => props.cursor ? props.cursor : 'pointer'};
  opacity: ${props => props.active ? props.active : '1'};
`;
