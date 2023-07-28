import RootLayout from '@/layout/RootLayout';
import { StarFilled, UserOutlined } from '@ant-design/icons';
import { Tabs, Space, Typography, Avatar, Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

const ProductDetailsPage = ({ product }) => {
  const items = [
    {
      key: '1',
      label: `Description`,
      children: <Typography.Text>{product?.description}</Typography.Text>,
    },
    {
      key: '2',
      label: `Reviews`,
      children: (
        <Space direction="vertical">
          <Space align="center" size={16} style={{ paddingBottom: 14 }}>
            <Rate disabled defaultValue={product?.average_rating} />
            <Typography.Title level={4} style={{ margin: 0 }}>
              {product?.average_rating} out of 5
            </Typography.Title>
          </Space>
          {product.reviews.length > 0 ? (
            product.reviews.map((r, i) => (
              <Space key={i} direction="vertical">
                <Space>
                  <Avatar size="large" icon={<UserOutlined />} />
                  <Space direction="vertical" size={0}>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      {r?.email}
                    </Typography.Title>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      <StarFilled style={{ color: '#FADB14' }} /> {r?.rating}
                    </Typography.Title>
                  </Space>
                </Space>
                <Typography.Text>{r?.comment}</Typography.Text>
              </Space>
            ))
          ) : (
            <p>No Review found!</p>
          )}
        </Space>
      ),
    },
  ];

  const keyFeatures = product?.key_features.trim().split('@');

  return (
    <section className="details-section" style={{}}>
      <div className="details-header">
        <div>
          <Image
            src={product?.image}
            alt={product?.name}
            width={350}
            height={280}
          />
        </div>
        <div>
          <Typography.Title level={4}>{product?.name}</Typography.Title>
          <Space>
            <p className="badge">
              Price: <span style={{ fontWeight: 600 }}>{product?.price} ৳</span>
            </p>
            <p className="badge">
              Status: <span style={{ fontWeight: 600 }}>{product?.status}</span>
            </p>
            <p className="badge">
              Category:{' '}
              <span style={{ fontWeight: 600 }}>{product?.category}</span>
            </p>
          </Space>

          <Typography.Title level={5}>Key Features</Typography.Title>
          <Space direction="vertical">
            {keyFeatures.map((f, i) => (
              <Typography.Text key={i}>{f}</Typography.Text>
            ))}
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

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  const paths = data?.data.map((p) => ({
    params: {
      productId: p._id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { productId } = context.params;

  const res = await fetch(
    `http://localhost:5000/get-single-product/${productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
}

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
