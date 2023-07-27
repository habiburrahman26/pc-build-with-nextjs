import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Row, Col, Dropdown, Space } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;

const items = [
  {
    key: '1',
    label: <Link href="processor">Processor</Link>,
  },
  {
    key: '2',
    label: <Link href="motherboard">Motherboard</Link>,
  },
  {
    key: '3',
    label: 'RAM',
  },
  {
    key: '4',
    label: 'Power Supply Unit',
  },
  {
    key: '5',
    label: 'Storage Device',
  },
  {
    key: '6',
    label: 'Monitor',
  },
  {
    key: '7',
    label: 'Others',
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="navbar-layout">
      <Header style={{ padding: 0, background: '#fff' }}>
        <Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4}>
            <div style={{ paddingLeft: '20px' }}>My Logo</div>
          </Col>
          <Col xs={0} sm={0} md={20}>
            <Menu
              mode="horizontal"
              items={[
                { label: 'Home' },
                {
                  label: 'Categories',
                  children: items,
                },
              ]}
            ></Menu>
          </Col>
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical">
            <Menu.Item icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item icon={<UserOutlined />}>Profile</Menu.Item>
            <Menu.Item icon={<SettingOutlined />}>Settings</Menu.Item>
            <Menu.Item>
              <Button type="primary" style={{ marginRight: '10px' }}>
                Sign in
              </Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
