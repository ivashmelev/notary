import React, { Component } from 'react'
import styled from 'styled-components'
import { isFieldNotEmpty } from '../../helpers'
import _ from 'lodash'
import eye from '../../assets/icons/eye.svg'
import notEye from '../../assets/icons/eye-no.svg'



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      localErrors: {},
      visibleInput: false,
      auth: 'false'
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(e) {
    this.setState(e)
  }

  validateAuthInfo() {
    let errors = {}
    const { login, password } = this.state
    if (!isFieldNotEmpty(login)) {
      errors = { ...errors, loginError: 'Введите логин' }
    }
    if (!isFieldNotEmpty(password)) {
      errors = { ...errors, passwordError: 'Введите пароль' }
    }
    return errors
  }

  async checkAuth(login, password, onChangeView) {
    try {
      const response = await fetch('https://foxstudio.site/api/v2/routes/login.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/text',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `login=${login}&password=${password}`
      })
      if (response.ok) {
        localStorage['name'] = await response.json();
        onChangeView()
      } else {
        this.setState({ localErrors: { loginError: 'Неверный логин или пароль' } })
      }
    } catch (err) {
      throw err;
    }
  }

  async handleAuthInfo(e) {
    const localErrors = this.validateAuthInfo()
    const checkAuth = async (login, password, onChangeView) => {
      try {
        const response = await fetch('https://foxstudio.site/api/v2/routes/login.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `login=${login}&password=${password}`
        })
        if (response.ok) {
          console.log(await response.json());
          onChangeView()
        } else {
          this.setState({ localErrors: { loginError: 'Неверный логин или пароль' } })
        }
      } catch (err) {
        throw err;
      }

    }
    if (_.isEmpty(localErrors)) {
      if (!_.isEmpty(this.state.localErrors)) {
        this.setState({ localErrors: {} })
      }
      const { login, password } = this.state
      const authInfo = {
        login: login,
        password: password
      }
      this.checkAuth(authInfo.login, authInfo.password, this.props.onChangeView);
      // if (authInfo.login === 'admin' && authInfo.password === 'adminadmin') {
      // this.props.onChangeView()
      // } else {
      // this.setState({ localErrors: { loginError: 'Неверный логин или пароль' } })
      // }
    } else {
      this.setState({ localErrors })
    }
  }

  render() {
    const { login, password, localErrors, visibleInput } = this.state

    return (
      <LoginWrapper>
        <LoginContainer>
          <LoginHeader>Авторизация</LoginHeader>
          <FormInputError>
            {
              localErrors.loginError ? (
                localErrors.loginError
              ) : null
            }
          </FormInputError>
          <FormInputWrapper>
            <FormInput
              value={login}
              placeholder='Логин'
              onChange={e => this.handleTextChange({ login: e.target.value })}
              type='text'
              name='login'
              required
              padding='0 10px 0 10px'
            />
          </FormInputWrapper>
          <FormInputError>
            {
              localErrors.passwordError ? (
                localErrors.passwordError
              ) : null
            }
          </FormInputError>
          <FormInputWrapper>
            <FormInput
              value={password}
              placeholder='Пароль'
              onChange={e => this.handleTextChange({ password: e.target.value })}
              type={visibleInput ? 'text' : 'password'}
              name='password'
              required
              padding='0 25px 0 10px'
            />
            <FormInputControl src={visibleInput ? eye : notEye} onClick={() => this.setState({ visibleInput: !visibleInput })} />
          </FormInputWrapper>
          <FormButtonWrapper>
            <FormButton
              onClick={() => this.handleAuthInfo()}
            >
              Вход
          </FormButton>
          </FormButtonWrapper>
        </LoginContainer>
      </LoginWrapper>
    );
  }
}

const FormInputControl = styled.img`
  position: absolute;
  right: 5px;
  cursor: pointer;
`
const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0 20px 0;
`
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
  width: 100%;
  height: 35px;
  font-size: 16px;
  line-height: 19px;
  color: #2D2D2D;
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  padding: ${props => props.padding};
  border-radius: 12px;
  ::placeholder,
  ::-webkit-input-placeholder {}
  :-ms-input-placeholder {}
`
const LoginHeader = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  margin: 0 0 30px 0;
`
const LoginContainer = styled.div`
  width: 320px;
  padding: 20px 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`
const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0; left: 0;
  background-color: #FFFFFF;
  z-index: 999;
  display: flex;
  justify-content:center;
  align-items: center;
`