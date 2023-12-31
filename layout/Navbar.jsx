import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col} from "antd";
import { MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: <Link href="/processor">Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/motherboard">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/ram">RAM</Link>,
  },
  {
    key: "4",
    label: <Link href="/power-supply">Power Supply Unit</Link>,
  },
  {
    key: "5",
    label: <Link href="/storage-device">Storage Device</Link>,
  },
  {
    key: "6",
    label: <Link href="/monitor">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/others">Others</Link>,
  },
];

const Navbar = () => {
  const { data: session } = useSession();
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
              style={{ paddingLeft: "20px", fontSize: "22px", fontWeight: 600 }}
            >
              Moon Light
            </Link>
          </Col>
          <Col xs={0} sm={0} md={16}>
            <Menu
              className="menu"
              mode="horizontal"
              items={[
                {
                  label: "Categories",
                  icon: <UnorderedListOutlined />,
                  children: items,
                },
              ]}
            ></Menu>
          </Col>
          <Col xs={0} sm={0} md={4}>
            <Link href="/tool/pc-builder">
              <Button type="primary" style={{ marginRight: "10px" }}>
                PC Builder
              </Button>
            </Link>

            {session?.user?.email ? (
              <Button type="primary" danger onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Link href="/sign-in">
                <Button>Sign in</Button>
              </Link>
            )}
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
              { label: "Home" },
              {
                label: "Categories",
                children: items,
              },
              {
                label: (
                  <Link href="/tool/pc-builder">
                    <Button type="primary" style={{ marginRight: "10px" }}>
                      PC Builder
                    </Button>
                  </Link>
                ),
              },
              {
                label: (
                  <>
                    {session?.user?.email ? (
                      <Button type="primary" danger onClick={() => signOut()}>
                        Logout
                      </Button>
                    ) : (
                      <Link href="/sign-in">
                        <Button>Sign in</Button>
                      </Link>
                    )}
                  </>
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
