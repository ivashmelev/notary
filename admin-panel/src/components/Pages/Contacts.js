import React, { useContext } from 'react';
import { PageContainer } from './PageContainer';
import { Table, Typography } from 'antd';
import { ContactsContext } from '../../context/contactsContext';
const { Text } = Typography;

export const Contacts = (props) => {
  const { data, isLoading, updateContact } = useContext(ContactsContext);
  const onChange = (record, key, str) => {
    const obj = {
      ...record,
      [key]: str
    }
    updateContact(obj)
  };

  const columns = [
    {
      title: 'Адрес',
      dataIndex: 'address',
      render: (text, record) => (
        text && (
          <Text editable={{ onChange: onChange.bind(this, record, 'address') }}>{text}</Text>
        )
      )
    },
    {
      title: 'Почта',
      dataIndex: 'mail',
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'mail') }}>{text}</Text>
      )
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phone',
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'phone') }}>{text}</Text>
      )
    },
  ]


  return (
    <PageContainer
      title="Контакты"
    >
      <Table
        columns={columns}
        dataSource={data}
        ellipsis
        loading={isLoading}
      />

    </PageContainer>
  )
}