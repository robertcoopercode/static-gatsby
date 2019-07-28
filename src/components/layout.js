import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link } from 'gatsby'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = AntLayout;

const menuItems = Array.from(Array(10).keys()).map(value => {
  if (value === 0) return {value: value + 1, path: `/`}
  return {value: value + 1, path: `/page-${value + 1}`}
})

const Layout = ({children, pathname}) => {
  return (
    <AntLayout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[pathname]}
        style={{ lineHeight: '64px' }}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.path}>
                <Link to={item.path}>
                  Page {item.value}
                </Link>
            </Menu.Item>
        ))}
      </Menu>
    </Header>
    <Content style={{ padding: '50px 50px 0' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>GatsbyJS</Footer>
  </AntLayout>
  )
}

export default Layout;