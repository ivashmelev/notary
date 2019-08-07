import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'


export default class ContactLine extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { phone, mail } = this.props;
    return (
      <ContactLineWrapper>
        <ContactLineText href={`tel:${phone}`}>{phone}</ContactLineText>
        <ContactLineText href={`mail:${phone}`}>{mail}</ContactLineText>
      </ContactLineWrapper>
    )
  }
}

const ContactLineWrapper = styled.div`
  display: flex;
  margin: 30px 35px;
  position: relative;
  z-index: 50;

  @media ${responsive.tablet} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const ContactLineText = styled.a`
  font-family: Montserrat Regular;
  font-size: 16px;
  margin-left: 24px;
  color: #FFFFFF;
  text-decoration: none;

  @media ${responsive.tablet} {
    margin-top: 15px;
  }
`;
