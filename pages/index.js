import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import RootLayout from '@/layout/RootLayout';
import { Card, Col, Row, Space, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import Link from 'next/link';

const { Meta } = Card;

export default function Home({products}) {
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
        <Row gutter={[4, 8]} justify="center">
          {products.map((p) => (
            <Col key={p._id} xs={16} sm={12} md={8} lg={6} xl={4}>
            <Link href={`/product/${p._id}`}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image alt="example" src={p.image} width={190} height={210} />
                }
              >
                <Meta title={p.name} />
                <div className="flex-between" style={{ padding: '4px 0' }}>
                  <Typography.Text>{p.category}</Typography.Text>
                  <Typography.Text>{p.status}</Typography.Text>
                </div>
                <div className="flex-between">
                  <Typography.Title level={5}>{p.price}৳</Typography.Title>
                  <Typography.Text>
                    <StarFilled style={{ color: '#FD8D14' }} />{' '}
                    {p.individual_rating}
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

export async function getStaticProps() {
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}


// Home.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
