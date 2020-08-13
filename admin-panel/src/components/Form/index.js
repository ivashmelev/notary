import React, { useEffect, useContext } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { UsersContext } from '../../context/usersContext';

export const FormUsers = (props) => {
  const { id, setUserId, onClose } = props;
  const { data, createUser, updateUser } = useContext(UsersContext);
  const allLogin = data.map(item => item.login);
  const [form] = Form.useForm();

  useEffect(() => {
    if (id && id.length > 0) {
      const user = data.filter((item) => item.id === id)[0];
      const initial = {
        name: user.name.split(' ')[0],
        surname: user.name.split(' ')[1],
        email: user.mail,
        login: user.login,
        password: ''
      };
      form.setFieldsValue(initial);
    }
  }, [id, data, form])

  const onFinish = values => {
    const obj = {
      id: id || '',
      name: `${values.name} ${values.surname}`,
      login: values.login,
      mail: values.email,
      password: values.password,
    }
    if (id && id.length > 0) {
      updateUser(obj);
    } else {
      createUser(obj);
    }
    setUserId('');
    form.resetFields();
    onClose();
  };

  const stopForm = () => {
    form.resetFields();
    onClose()
  }

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        label="Имя"
        rules={[{ required: true, message: 'Введите имя' }]}
        hasFeedback
      >
        <Input placeholder="Введите имя" />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Фамилия"
        rules={[{ required: true, message: 'Введите фамилию' }]}
        hasFeedback
      >
        <Input placeholder="Введите фамилию" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Почта"
        rules={[
          {
            type: 'email',
            message: 'Некорректная почта',
          },
          {
            required: true,
            message: 'Введите почту',
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Введите электронную почту" />
      </Form.Item>
      <Form.Item
        name="login"
        label="Логин"
        rules={[
          {
            required: true,
            message: 'Введите логин',
          },
          () => ({
            validator(rule, value) {
              if (!id) {
                if (!allLogin.includes(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject('Логин уже используется');
                }
              } else {
                if (!data.filter((item) => item.id !== id).map(item => item.login).includes(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject('Логин уже используется');
                }
              }
            },
          }),
        ]}
        hasFeedback
      >
        <Input placeholder="Введите логин" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Введите пароль' }]}
        hasFeedback

      >
        <Input.Password placeholder="Введите новый пароль" />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Подтвердите пароль"
        rules={[
          {
            required: true,
            message: 'Подтвердите новый пароль',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('Пароли не совпадают');
            },
          }),
        ]}
        dependencies={['password']}
        hasFeedback
      >
        <Input.Password placeholder="Повторите новый пароль" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        style={{
          textAlign: 'right',
        }}
      >
        <Space style={{ marginTop: 16 }}>
          <Button onClick={stopForm}>
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
