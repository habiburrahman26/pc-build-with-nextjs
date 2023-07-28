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
    label: <Link href="ram">RAM</Link>,
  },
  {
    key: '4',
    label: <Link href="power-supply">Power Supply Unit</Link>,
  },
  {
    key: '5',
    label: <Link href="storage-device">Storage Device</Link>,
  },
  {
    key: '6',
    label: <Link href="monitor">Monitor</Link>,
  },
  {
    key: '7',
    label: <Link href="others">Others</Link>,
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
    <Layout>
      <Header className="navbar-header">
        <Row justify="center">
          <Col xs={20} sm={20} md={4}>
            <Link
              href="/"
              style={{ paddingLeft: '20px', fontSize: '22px', fontWeight: 600 }}
            >
              Moon Light
            </Link>
          </Col>
          <Col xs={0} sm={0} md={16}>
            <Menu
              className="menu"
              mode="horizontal"
              items={[
                { label: <Link href="/">Home</Link> },
                {
                  label: 'Categories',
                  children: items,
                },
              ]}
              onClick={()=>{}}
            ></Menu>
          </Col>
          <Col xs={0} sm={0} md={4}>
            <Button type="primary" style={{ marginRight: '10px' }}>
              <Link href="/pc-build">PC Builder</Link>
            </Button>
            <Button>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </Col>
          <Col xs={4} sm={4} md={0}>
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
          open={visible}
          className="nav-drawer"
        >
          <Menu
            mode="vertical"
            items={[
              { label: 'Home' },
              {
                label: 'Categories',
                children: items,
              },
              {
                label: (
                  <Button type="primary" style={{ marginRight: '10px' }}>
                    <Link href="/pc-build">PC Builder</Link>
                  </Button>
                ),
              },
              {
                label: (
                  <Button>
                    <Link href="/sign-in">Sign in</Link>
                  </Button>
                ),
              },
            ]}
          ></Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
