import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import RootLayout from '@/layout/RootLayout';
import { Card, Col, Row, Space, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import Link from 'next/link';

const { Meta } = Card;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is home page" />
      </Head>

      <section style={{ padding: '16px' }}>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Featured product
        </Typography.Title>
        <Row gutter={[4, 4]} justify="center">
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <Col key={p} xs={16} sm={12} md={8} lg={6} xl={4}>
              <Link href={`/product/1`}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <Image
                      alt="example"
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-200x200.webp"
                      width={200}
                      height={220}
                    />
                  }
                >
                  <Meta title="Europe Street beat" />
                  <div className="flex-between" style={{ padding: '4px 0' }}>
                    <Typography.Text>Monitor</Typography.Text>
                    <Typography.Text>In stock</Typography.Text>
                  </div>
                  <div className="flex-between">
                    <Typography.Title level={5}>$200</Typography.Title>
                    <Typography.Text>
                      <StarFilled style={{ color: '#FD8D14' }} /> 4
                    </Typography.Text>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      <section
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Featured Category
        </Typography.Title>
        <Space size="middle" wrap>
          <Link href="/processor">
            <Card hoverable>Processor</Card>
          </Link>

          <Link href="/motherboard">
            <Card hoverable>Motherboard</Card>
          </Link>

          <Link href="/ram">
            <Card hoverable>RAM</Card>
          </Link>

          <Link href="/power-supply">
            <Card hoverable>Power Supply Unit</Card>
          </Link>

          <Link href="/storage-device">
            <Card hoverable>Storage Device</Card>
          </Link>
          <Link href="/monitor">
            <Card hoverable>Monitor</Card>
          </Link>
          <Link href="/others">
            <Card hoverable>Others</Card>
          </Link>
        </Space>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
