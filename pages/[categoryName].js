import RootLayout from '@/layout/RootLayout';
import { StarFilled } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';
import React from 'react';

const {Meta} = Card;

const CategorySinglePage = () => {
  return (
    <div style={{padding:16}}>
      <Row gutter={[4, 4]} justify="center" wrap>
        {[1, 2, 3,4].map((p) => (
          <Col key={p} xs={16} sm={12} md={8} lg={6} xl={4}>
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategorySinglePage;

CategorySinglePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
