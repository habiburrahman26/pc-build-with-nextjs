import { addToPcBuild } from '@/redux/features/pcBuild/pcBuild';
import { StarFilled } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const { Meta } = Card;

const AddToolPage = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div style={{ padding: 16 }}>
      <Row gutter={[4, 4]} justify="center" wrap>
        {products?.map((p) => (
          <Col key={p._id} xs={16} sm={12} md={8} lg={6} xl={5} xxl={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Image alt="example" src={p?.image} width={200} height={220} />
              }
            >
              <Meta title={p?.name} />
              <div className="flex-between" style={{ padding: '4px 0' }}>
                <Typography.Text>{p?.category}</Typography.Text>
                <Typography.Text>{p?.status}</Typography.Text>
              </div>
              <div className="flex-between">
                <Typography.Title level={5}>{p?.price}৳</Typography.Title>
                <Typography.Text>
                  <StarFilled style={{ color: '#FD8D14' }} />{' '}
                  {p?.individual_rating}
                </Typography.Text>
              </div>
              <Button
                type="primary"
                block
                onClick={() => {
                  dispatch(addToPcBuild(p));
                  router.replace('/tool/pc-builder');
                }}
              >
                Add To Builder
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AddToolPage;

export async function getServerSideProps(context) {
  const { toolName } = context.params;

  const res = await fetch(`https://pc-builder-backend-habiburrahman26.vercel.app/products/${toolName}`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}
