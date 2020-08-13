import React, { Component } from 'react'
import styled from 'styled-components'
import devLogo from '../../assets/devLogo.svg'

export default class Developer extends Component {
  render() {
    return (
      <DeveloperLink href="//foxstudio.site" target="_blank">
        <DeveloperIn>Created in</DeveloperIn>
        <DeveloperLogo src={devLogo} />
      </DeveloperLink>
    )
  }
}

const DeveloperLink = styled.a`
  width: 100%;
  background-color: #080808;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 8px;
  box-sizing: border-box;
  text-decoration: none;
`

const DeveloperLogo = styled.img`
  height: 20px;
`

const DeveloperIn = styled.div`
  font-family: Montserrat Bold;
  font-size: 9.3px;
  color: #FFF;
  padding: 0 6px;
  line-height: 8px;
`