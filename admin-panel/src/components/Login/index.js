import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const Login = (props) => {
  const { onChangeName, onChangeView } = props;
  const [status, setStatus] = useState('')
  const [form] = Form.useForm();

  const checkAuth = async (login, password) => {
    try {
      const response = await fetch('https://notary-nn.ru/api/v2/routes/login.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/text',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `login=${login}&password=${password}`
      })


      if (response.ok) {
        const name = await response.json();
        onChangeName(name)
        onChangeView(true)
      } else {
        form.resetFields();
        setStatus('Введено неверное имя пользователя или пароль')
      }
    } catch (err) {
      throw err;
    }
  }
  const onFinish = values => {
    const { username, password } = values;
    checkAuth(username, password)
  };
  return (
    <div className="containerLoginForm">
      <div className="loginForm">

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
            hasFeedback
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
              </Button>
          </Form.Item>
        </Form>

        <Text type="danger">{status}</Text>
      </div>
    </div>
  );
};