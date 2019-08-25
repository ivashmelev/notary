import React, { Component } from 'react'
import styled from 'styled-components'
import { validateEmail, isFieldNotEmpty } from '../../helpers'
import _ from 'lodash'

const USERS_VIEW_PAGE = 'USERS_VIEW_PAGE'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      sername: '',
      mail: '',
      login: '',
      password: '',
      passwordReplay: '',
      localErrors: {}
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  componentDidMount() {
    if (this.props.data) {
      const copyState = { ...this.state }
      const { id, name, mail, login, password } = this.props.data[this.props.editIndex]
      copyState.id = id
      copyState.name = name.split(' ')[0]
      copyState.sername = name.split(' ')[1]
      copyState.mail = mail
      copyState.login = login
      copyState.password = ''
      copyState.passwordReplay = ''
      this.setState(copyState)

    }
  }

  handleTextChange(e) {
    this.setState(e)
  }

  validateNewUserInfo() {
    let errors = {}
    const { name, sername, mail, login, password, passwordReplay } = this.state
    if (!isFieldNotEmpty(name)) {
      errors = { ...errors, nameError: 'Введите имя' }
    }
    if (!isFieldNotEmpty(sername)) {
      errors = { ...errors, sernameError: 'Введите фамилию' }
    }
    if (!isFieldNotEmpty(mail)) {
      errors = { ...errors, mailError: 'Введите email' }
    } else if (!validateEmail(mail)) {
      errors = { ...errors, mailError: 'Введите корректный email' }
    }
    if (!isFieldNotEmpty(login)) {
      errors = { ...errors, loginError: 'Введите логин' }
    }
    if (!isFieldNotEmpty(password)) {
      errors = { ...errors, passwordError: 'Введите пароль' }
    }
    if (!isFieldNotEmpty(passwordReplay)) {
      errors = { ...errors, passwordReplayError: 'Повторите пароль' }
    }
    if (password !== passwordReplay) {
      errors = { ...errors, passwordError: 'Пароли не совпадают', passwordReplayError: 'Пароли не совпадают' }
    }
    return errors
  }

  async handleNewUserInfo(e) {
    const localErrors = this.validateNewUserInfo()
    if (_.isEmpty(localErrors)) {
      if (!_.isEmpty(this.state.localErrors)) {
        this.setState({ localErrors: {} })
      }
      const { id, name, sername, mail, login, password } = this.state
      const newUserInfo = {
        id: id,
        name: `${name} ${sername}`,
        mail: mail,
        login: login,
        password: password
      }
      this.props.onAddNewUser(newUserInfo)
      this.props.onDoThis(USERS_VIEW_PAGE)
      // alert(`К отправке данные ${newUserInfo.name}, ${newUserInfo.mail}, ${newUserInfo.login}, ${newUserInfo.password}`)
    } else {
      this.setState({ localErrors })
    }
  }

  async handleEditUserInfo(e) {
    const localErrors = this.validateNewUserInfo()
    if (_.isEmpty(localErrors)) {
      if (!_.isEmpty(this.state.localErrors)) {
        this.setState({ localErrors: {} })
      }
      const { id, name, sername, mail, login, password } = this.state
      const newUserInfo = {
        id: id,
        name: `${name} ${sername}`,
        mail: mail,
        login: login,
        password: password
      }
      this.props.onEditUser(newUserInfo, this.props.editIndex)
      this.props.onDoThis(USERS_VIEW_PAGE)
      // alert(`К отправке данные ${newUserInfo.name}, ${newUserInfo.mail}, ${newUserInfo.login}, ${newUserInfo.password}`)
    } else {
      this.setState({ localErrors })
    }
  }

  render() {
    const { name, sername, mail, login, password, passwordReplay, localErrors } = this.state
    // const { onEditUser } = this.props
    return (
      <FormWrapper>
        <FormTitle>
          {this.props.title}
        </FormTitle>
        <FormConatainer>
          <FormInputError>
            {
              localErrors.nameError ? (
                localErrors.nameError
              ) : null
            }
          </FormInputError>
          <FormInput
            value={name}
            placeholder='Имя'
            onChange={e => this.handleTextChange({ name: e.target.value })}
            type='text'
            name='name'
            required
          />
          <FormInputError>
            {
              localErrors.sernameError ? (
                localErrors.sernameError
              ) : null
            }
          </FormInputError>
          <FormInput
            value={sername}
            placeholder='Фамилия'
            onChange={e => this.handleTextChange({ sername: e.target.value })}
            type='text'
            name='sername'
            required
          />
          <FormInputError>
            {
              localErrors.mailError ? (
                localErrors.mailError
              ) : null
            }
          </FormInputError>
          <FormInput
            value={mail}
            placeholder='E-mail'
            onChange={e => this.handleTextChange({ mail: e.target.value })}
            type='mail'
            name='mail'
            required
          />
          <FormInputError>
            {
              localErrors.loginError ? (
                localErrors.loginError
              ) : null
            }
          </FormInputError>
          <FormInput
            value={login}
            placeholder='Логин'
            onChange={e => this.handleTextChange({ login: e.target.value })}
            type='text'
            name='login'
            required
          />
          <FormInputError>
            {
              localErrors.passwordError ? (
                localErrors.passwordError
              ) : null
            }
          </FormInputError>
          <FormInput
            value={password}
            placeholder='Пароль'
            onChange={e => this.handleTextChange({ password: e.target.value })}
            type='password'
            name='password'
            required
          />
          <FormInputError>
            {
              localErrors.passwordReplayError ? (
                localErrors.passwordReplayError
              ) : null
            }
          </FormInputError>
          <FormInput
            value={passwordReplay}
            placeholder='Повторите пароль'
            onChange={e => this.handleTextChange({ passwordReplay: e.target.value })}
            type='password'
            name='passwordReplay'
            required
          />
        </FormConatainer>
        <FormButtonWrapper>
          <FormButton
            onClick={this.props.edit ? () => this.handleEditUserInfo() : () => this.handleNewUserInfo()}
          >
            Сохранить
          </FormButton>
        </FormButtonWrapper>
      </FormWrapper>
    )
  }
}

export default Form

const FormInputError = styled.div`
  height: 10px;
  font-size: 8px;
  letter-spacing: 0.05em;
  color: #ff6363;
  display: flex;
  align-items: center;
`
const FormButton = styled.div`
  width: 140px;
  height: 40px;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  background: #FFFFFF;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`
const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0 0;
`
const FormInput = styled.input`
  /* max-width: 320px; */
  width: 100%;
  height: 35px;
  font-size: 16px;
  line-height: 19px;
  color: #2D2D2D;
  display: flex;
  background: transparent;
  margin: 0 0 20px 0;
  border: none;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {}
  :-ms-input-placeholder {}
`
const FormConatainer = styled.div`
  width: 100%;
`
const FormTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: #000000;
  margin: 0 0 25px 0;
`
const FormWrapper = styled.div`
  width: 300px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  border-radius: 12px;
  padding: 15px;
`