import React, { useRef, useContext } from 'react';
import { PageContainer } from './PageContainer';
import { Table, Input, Select, Button, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SectionsContext } from '../../context/sectionsContext';
import { TariffsContext } from '../../context/tariffsContext';

const { Text } = Typography;
const { Option } = Select;

export const Tariffs = (props) => {
  const { sections, selectID, isLoading, updateIdSection } = useContext(SectionsContext);
  const { data, isLoadingTariffs, updateTariffs } = useContext(TariffsContext);

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
    updateTariffs(obj)
  };

  function onChangeSelect(value) {
    updateIdSection(value)
  }

  const columns = [
    {
      title: 'Заголовок',
      align: 'top',
      className: 'cellTextTop',
      dataIndex: 'title',
      width: 300,
      ...getColumnSearchProps('title'),
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'title') }}>{text}</Text>
      )
    },
    {
      title: 'Подзаголовок',
      align: 'top',
      className: 'cellTextTop',
      dataIndex: 'subtitle',
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'subtitle') }}>{text}</Text>
      )
    },
    {
      title: 'Тариф',
      align: 'top',
      className: 'cellTextTop',
      dataIndex: 'tariff',
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'tariff') }}>{text}</Text>
      )
    },
    {
      title: 'Размер платы УПТХ',
      align: 'top',
      className: 'cellTextTop',
      dataIndex: 'price',
      render: (text, record) => (
        <Text editable={{ onChange: onChange.bind(this, record, 'price') }}>{text}</Text>
      )
    },
  ];

  return (
    <PageContainer
      title="Тарифы"
    >
      <Space direction="vertical">
        <Select
          showSearch
          style={{ width: 350 }}
          placeholder="Выберите раздел"
          optionFilterProp="children"
          value={selectID}
          onChange={onChangeSelect}
          loading={isLoading}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {
            sections.map(item => (
              <Option key={item.id} value={item.id}>{item.title}</Option>
            ))
          }
        </Select>
        <Table
          columns={columns}
          dataSource={data}
          loading={isLoadingTariffs}
        />
      </Space>
    </PageContainer>
  )
}