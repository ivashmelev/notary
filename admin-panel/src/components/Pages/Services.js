import React, { useRef, useContext } from 'react';
import { PageContainer } from './PageContainer';
import { Table, Input, Button, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ServicesContext } from '../../context/servicesContext';
const { Text } = Typography;

export const Services = (props) => {
  const { data, isLoading, updateService } = useContext(ServicesContext);
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };

  const handleReset = clearFilters => {
    clearFilters();
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Поиск по заголовку`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Поиск
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Сброс
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select());
      }
    }
  });

  const onChange = (record, key, str) => {
    const obj = {
      ...record,
      [key]: str
    }
    updateService(obj)
  };

  const columns = [
    {
      title: 'Заголовок',
      align: 'top',
      className: 'cellTextTop',
      dataIndex: 'title',
      width: 350,
      ...getColumnSearchProps('title'),
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'title') }}>{text}</Text>
      )
    },
    {
      title: 'Описание',
      align: 'top',
      className: 'cellTextTop',
      dataIndex: 'description',
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'description') }}>{text}</Text>
      )
    }
  ];

  return (
    <PageContainer
      title="Услуги"
    >
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
    </PageContainer>
  )
}