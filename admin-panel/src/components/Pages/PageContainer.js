import React from 'react';
import { Layout, Typography } from 'antd';
import { Scrollbar } from '../Scrollbar'

const { Title } = Typography;
const { Content } = Layout;


export const PageContainer = (props) => {
  const { title, children } = props;

  return (
    <>
      <Title level={2}>{title}</Title>
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <Scrollbar>
          <div
            style={{
              padding: 20,
            }}
          >
            {children}
          </div>
        </Scrollbar>
      </Content>
    </>
  )
}