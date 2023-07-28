import RootLayout from '@/layout/RootLayout';
import { Button, Card, Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const PcBuilderPage = () => {
  return (
    <section className="pc-build">
      <div className="flex-between">
        <Typography.Title level={5} style={{ color: '#3749BB' }}>
          PC Builder - Build Your Own Computer
        </Typography.Title>
        <Space className="price-item-card">
          <Typography.Title level={4} style={{ color: '#fff', margin: 0 }}>
            7000৳
          </Typography.Title>
        </Space>
      </div>
      <p className='core-heading'>Core Components</p>
      <div className='flex-vertical'>
        <div className="flex-between border-bottom">
          <Typography.Title level={5} style={{ margin: 0 }}>
            CPU
          </Typography.Title>
          <Button>
            <Link href="/tool/processor">Choose</Link>
          </Button>
        </div>
        <div className="flex-between border-bottom">
          <Typography.Title level={5} style={{ margin: 0 }}>
            Motherboard
          </Typography.Title>
          <Button>
            <Link href="/tool/motherboard">Choose</Link>
          </Button>
        </div>
        <div className="flex-between border-bottom">
          <Typography.Title level={5} style={{ margin: 0 }}>
            RAM
          </Typography.Title>
          <Button>
            <Link href="/tool/ram">Choose</Link>
          </Button>
        </div>
        <div className="flex-between border-bottom">
          <Typography.Title level={5} style={{ margin: 0 }}>
            Power Supply Unit
          </Typography.Title>
          <Button>
            <Link href="/tool/power-supply">Choose</Link>
          </Button>
        </div>
        <div className="flex-between border-bottom">
          <Typography.Title level={5} style={{ margin: 0 }}>
            Storage Device
          </Typography.Title>
          <Button>
            <Link href="/tool/storage-device">Choose</Link>
          </Button>
        </div>
        <div className="flex-between">
          <Typography.Title level={5} style={{ margin: 0 }}>
            Monitor
          </Typography.Title>
          <Button>
            <Link href="/tool/monitor">Choose</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
