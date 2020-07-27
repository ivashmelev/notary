import React, { useContext } from 'react';
import { PageContainer } from './PageContainer';
import { Table } from 'antd';
import { AppointmentContext } from '../../context/appointmentContext';

export const Appointment = (props) => {
  const { data, isLoading } = useContext(AppointmentContext);

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phone',
    },
    {
      title: 'Почта',
      dataIndex: 'mail',
      render: (mail) => (<a href={`mailto:${mail}`}>{mail}</a>)
    },
  ]

  return (
    <PageContainer
      title="Записи на прием"
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