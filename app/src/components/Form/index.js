import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  phoneMask(e) {
    let matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
  }

  render() {
    return (
      <FormWrapper>
        <FormTtileContainer>
          <FormTtile>НАПИСАТЬ</FormTtile>
        </FormTtileContainer>
        <FormContainer>
          <FormInput type='text' name='name' required placeholder='Имя' />
          <FormInput type='text' name='phone' required placeholder='+7 (___) ___ __ __' onChange={this.phoneMask} />
          <FormInput type='email' name='mail' required placeholder='mail@example.ru' />
          <FormInput type='text' name='comment' required placeholder='Комментарий' />
        </FormContainer>
        <FormButtonContainer>
          <FormButton>ОТПРАВИТЬ</FormButton>
        </FormButtonContainer>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div`
  left: 160px;
  z-index: 100;
  position: relative;
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 560px;
  height: 643px;
  padding: 68px 45px;
  background: #2D2D2D;
  justify-content: center;
  box-shadow: 15px 0px 48px rgba(0, 0, 0, 0.55);

  @media ${responsive.tablet} {
    left: 0;
    width: 100%;
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
  
`;

const FormContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${responsive.tablet} {
    align-items: center;
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
  margin-bottom: 32px;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  outline: none;
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

  &:hover{
    cursor: pointer;
  }
`;
