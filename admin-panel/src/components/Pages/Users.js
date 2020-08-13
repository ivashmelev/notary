import React, { useState, useContext } from 'react';
import { PageContainer } from './PageContainer';
import { Table, Drawer, Button, Tooltip, Space, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined, WarningTwoTone } from '@ant-design/icons';
import { UsersContext } from '../../context/usersContext';
import { FormUsers } from '../Form/';

export const Users = (props) => {
  const [visible, setVisible] = useState(false);
  const [userId, setUserId] = useState('');
  const [titleDrawer, setTitleDrawer] = useState('');
  const { data, isLoading, removeUser } = useContext(UsersContext);

  const showDrawer = (key) => {
    switch (key) {
      case 'create':
        setUserId('');
        setTitleDrawer('Создание учетной записи');
        break;
      case 'update':
        setTitleDrawer('Изменение учетной записи');
        break;
      default:
        setUserId('');
        setTitleDrawer('Создание учетной записи');
        break;
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Почта',
      dataIndex: 'mail',
    },
    {
      title: 'Логин',
      dataIndex: 'login',
    },
    {
      title: 'Действия',
      dataIndex: 'id',
      key: 'x',
      align: 'right',
      render: (id) => (
        <>
          <Tooltip title="Изменить">
            <Button
              type='text'
              shape="circle"
              style={{ marginLeft: 16 }}
              icon={<EditOutlined />}
              onClick={() => {
                setUserId(id);
                showDrawer('update');
              }}
            />
          </Tooltip>
          {
            id !== '5' && (
              <Tooltip title="Удалить">
                <Popconfirm
                  placement="bottomRight"
                  title="Учетная запись будет удалена, вы уверены?"
                  onConfirm={() => removeUser(id)}
                  okText="Да"
                  cancelText="Нет"
                  icon={<WarningTwoTone twoToneColor="#ff4d4f" />}
                >
                  <Button
                    danger
                    type='text'
                    shape="circle"
                    style={{ marginLeft: 16 }}
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
              </Tooltip>
            )
          }
        </>
      ),
    },
  ];

  return (
    <PageContainer
      title="Пользователи"
    >
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={() => showDrawer('create')} icon={<UserAddOutlined />}>Добавить пользователя</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        ellipsis
        loading={isLoading}
      />
      <Drawer
        title={titleDrawer}
        placement="right"
        width={380}
        closable
        onClose={onClose}
        visible={visible}
      >
        <FormUsers onClose={onClose} setUserId={setUserId} id={userId} />
      </Drawer>
    </PageContainer>
  )
}