import RootLayout from '@/layout/RootLayout';
import { StarFilled, UserOutlined } from '@ant-design/icons';
import { Tabs, Space, Typography, Avatar, Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

const items = [
  {
    key: '1',
    label: `Description`,
    children: (
      <Typography.Text>
        The MSI PRO MP223 21.45" 100Hz Full HD Business Monitor Boost your
        productivity at work with the 21.5-inch Full HD Monitor. Your programs,
        spreadsheets, and other crucial work papers may be seen with ease on its
        large 21.45-inch screen. Your eyes are protected by MSI Anti-Flicker
        technology, which also reduces blue light, while long-term eye damage is
        also prevented. Despite your long hours of work, you can rely on this
        monitor to safeguard your eye health. The VA Wide Viewing Angle
        technology enhances the screen's colors and brightness to make sure you
        can enjoy every detail to the fullest, making it ideal for professionals
        who need precise color representation. This MSI PRO MP223 also has a
        high refresh rate of 100Hz, which enables it to display more images
        continuously while putting less strain on your eyes.
      </Typography.Text>
    ),
  },
  {
    key: '2',
    label: `Reviews`,
    children: (
      <Space direction='vertical'>
        <Space align='center' size={16} style={{paddingBottom:14}}>
          <Rate disabled  defaultValue={4} /> 
          <Typography.Title level={4} style={{ margin: 0 }}>4 out of 5</Typography.Title>
        </Space>
        <Space direction="vertical">
          <Space>
            <Avatar size="large" icon={<UserOutlined />} />
            <Space direction="vertical" size={0}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                habib@gmail.com
              </Typography.Title>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <StarFilled style={{ color: '#FADB14' }} /> 4
              </Typography.Title>
            </Space>
          </Space>
          <Typography.Text>Good product</Typography.Text>
        </Space>
      </Space>
    ),
  },
];

const ProductDetailsPage = () => {
  return (
    <section className='details-section'>
      <div className="details-header">
        <div>
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-200x200.webp"
            alt=""
            width={350}
            height={280}
          />
        </div>
        <div>
          <Typography.Title level={4}>
            MSI PRO MP223 Full HD Business Monitor
          </Typography.Title>
          <Space>
            <p className="badge">
              Price: <span style={{ fontWeight: 600 }}>$200</span>
            </p>
            <p className="badge">
              Status: <span style={{ fontWeight: 600 }}>In Stock</span>
            </p>
            <p className="badge">
              Category: <span style={{ fontWeight: 600 }}>Monitor</span>
            </p>
          </Space>

          <Typography.Title level={5}>Key Features</Typography.Title>
          <Space direction="vertical">
            <Typography.Text>Model: PRO MP223</Typography.Text>
            <Typography.Text>Resolution: FHD (1920 x 1080)</Typography.Text>
            <Typography.Text>Display: VA, 100Hz, 1ms </Typography.Text>
            <Typography.Text>
              Ports: 1x HDMI, 1x VGA, 1x Audio Out
            </Typography.Text>
            <Typography.Text>Features: Anti-Flicker Technology</Typography.Text>
          </Space>
        </div>
      </div>
      <Tabs
        type="card"
        size="middle"
        tabBarGutter={5}
        defaultActiveKey="1"
        items={items}
        className="product-tab"
      />
    </section>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
