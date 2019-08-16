import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Header/Title'
import InfoLine from '../CommonUI/InfoLine'
import Form from '../Form'

const USERS_VIEW_PAGE = 'USERS_VIEW_PAGE'
const USERS_VIEW_EDIT = 'USERS_VIEW_EDIT'
const USERS_VIEW_NEW = 'USERS_VIEW_NEW'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: '0',
          name: 'Ангелина Пережогина',
          mail: 'angelina@gmail.com',
          login: 'admin',
          password: 'sidfh123'
        },
        {
          id: '1',
          name: 'Василиса Соловьева',
          mail: 'v.solo@gmail.com',
          login: 'manager',
          password: 'sidfh123'
        },
        {
          id: '2',
          name: 'Ихтан Курваян',
          mail: 'i.kurva@gmail.com',
          login: 'adminadmin',
          password: 'sidfh123'
        }
      ],
      viewPage: USERS_VIEW_PAGE,
      editIndex: null
    }
    this.changeViewPage = this.changeViewPage.bind(this)
    this.addNewUser = this.addNewUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('http://foxstudio.site/api/v2/routes/admin.php');
        if (await response.ok) {
          this.setState({ users: await response.json() });
          console.log(this.state.users);
        }
      })();
    } catch (err) {
      throw err;
    }
  }

  changeViewPage(value, index) {
    this.setState({ editIndex: index })
    this.setState({ viewPage: value })
  }

  addNewUser(obj) {
    const copyState = { ...this.state }
    obj.id = copyState.users.length
    copyState.users = [...copyState.users, obj]
    this.setState(copyState)
  }

  editUser(obj, index) {
    console.log(obj);
    const send = async () => {
      try {
        const response = await fetch('http://foxstudio.site/api/v2/routes/admin.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${obj.id}&name=${obj.name}&login=${obj.login}&password=${obj.password}`,
          // mode: 'no-cors'
        });
        if (await response.ok) {
          const copyState = { ...this.state }
          copyState.users.splice(index, 1, await response.json())
          this.setState(copyState)
        }

      } catch (err) {
        throw err;
      }
    }
    send();
  }

  deleteUser(index) {
    const copyState = { ...this.state }
    copyState.users.splice(index, 1)
    this.setState(copyState)
  }

  render() {
    const { users, viewPage, editIndex } = this.state
    return (
      viewPage === USERS_VIEW_PAGE ? (
        <UsersWrapper>
          <Title title='Пользователи' nextTitle='' icon='plus' onDoThis={this.changeViewPage} />
          <UsersContainer>
            <InfoLine page='users' infoLine={users} onDoThis={this.changeViewPage} onDeleteUser={this.deleteUser} />
          </UsersContainer>
        </UsersWrapper>
      ) : viewPage === USERS_VIEW_NEW ? (
        <UsersWrapper>
          <Title title='Пользователи' nextTitle='Новый пользователь' icon='chevron' onDoThis={this.changeViewPage} />
          <UsersContainer>
            <Form title='Создание пользователя' onDoThis={this.changeViewPage} onAddNewUser={this.addNewUser} />
            {/* <InfoLine page='users' infoLine={users}/> */}
          </UsersContainer>
        </UsersWrapper>
      ) : viewPage === USERS_VIEW_EDIT ? (
        <UsersWrapper>
          <Title title='Пользователи' nextTitle='Изменение пользователя' icon='chevron' onDoThis={this.changeViewPage} />
          <UsersContainer>
            <Form title='Изменение пользователя' edit={true} editIndex={editIndex} data={users} onDoThis={this.changeViewPage} onEditUser={this.editUser} />
          </UsersContainer>
        </UsersWrapper>
      ) : (
              <UsersWrapper>
                <Title title='Пользователи' nextTitle='' icon='plus' onDoThis={this.changeViewPage} />
                <UsersContainer>
                  <InfoLine page='users' infoLine={users} />
                </UsersContainer>
              </UsersWrapper>
            )
    );
  }
}

export default Users

const UsersContainer = styled.div`
  width: 100%;
  padding: 15px 0;
`
const UsersWrapper = styled.div`
  width: 100%;
`