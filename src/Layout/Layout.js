import {
  AlignRightOutlined, EyeOutlined, FileOutlined, FileSearchOutlined, PieChartOutlined,
  TeamOutlined, UserAddOutlined, UserOutlined, UserSwitchOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Employees', 'sub1', <UserSwitchOutlined />, [
      getItem('View Employees', '3', <EyeOutlined />),
      getItem('Add Employees', '4', <UserAddOutlined />),
    ]),
    getItem('Leave Applications', '5', <FileOutlined />),
    getItem('View Attendance', '6', <AlignRightOutlined />),
    getItem('Mark Attendance', '7', <FileSearchOutlined />),
    getItem('View Profile', '8', <UserOutlined />),
  ];
  const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo flex justify-center" >
          <TeamOutlined />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: '0 20px',
              background:'white'
            }}
          >
            <p style={{fontWeight:'bold'}}>header</p>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            EMS ©{new Date().getFullYear()} Created by Shah Jahidul Islam Riad
          </Footer>
        </Layout>
      </Layout>
    );
  };
  export default AppLayout;