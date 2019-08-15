import React, { Component } from 'react'
import styled from 'styled-components'

class Users extends Component {
  render() {
    return (
      <UsersWrapper>
        ПОЛЬЗОВАТЕЛИ
      </UsersWrapper>
    );
  }
}

export default Users

const UsersWrapper = styled.div`
  width: 100%;
`