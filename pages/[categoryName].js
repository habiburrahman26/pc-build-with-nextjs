import RootLayout from '@/layout/RootLayout';
import { StarFilled } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const { Meta } = Card;

const CategorySinglePage = ({ product }) => {
  return (
    <div style={{ padding: 16 }}>
      <Row gutter={[4, 4]} justify="center" wrap>
        {product?.map((p) => (
          <Col key={p._id} xs={16} sm={12} md={8} lg={6} xl={4}>
            <Link href={`/product/${p._id}`}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image alt="example" src={p.image} width={200} height={220} />
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
    </div>
  );
};

export default CategorySinglePage;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  const paths = data?.data.map((p) => ({
    params: {
      categoryName: p._id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { categoryName } = context.params;

  const res = await fetch(`http://localhost:5000/products/${categoryName}`);
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
}

