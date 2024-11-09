import React, { Children } from 'react';
import { UserOutlined } from '@ant-design/icons';

import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;



const LayoutWrapper = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
        }}>
        <Avatar size="large" icon={<UserOutlined />} />
        </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            position: 'relative',
          }}
        >
          { children }
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Stock Mangement ©2021 Created by Indus Innovators
      </Footer>
    </Layout>
  );
};
export default LayoutWrapper;