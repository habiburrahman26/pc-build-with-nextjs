import { Button, Space, Typography, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import {
  completeBuild,
  removeToPcBuild,
} from "@/redux/features/pcBuild/pcBuild";

const PcBuilderPage = () => {
  const dispatch = useDispatch();
  const { totalItems, totalPrice, items } = useSelector(
    (state) => state.pcBuild
  );

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Your pc build successfully",
    });
  };

  const processor = items?.find((i) => i.category === "processor");
  const motherboard = items?.find((i) => i.category === "motherboard");
  const ram = items?.find((i) => i.category === "ram");
  const powerSupply = items?.find((i) => i.category === "power-supply");
  const monitor = items?.find((i) => i.category === "monitor");
  const storageDevice = items?.find((i) => i.category === "storage-device");

  return (
    <section className="pc-build">
      {contextHolder}
      <div className="flex-between">
        <Typography.Title level={5} style={{ color: "#3749BB" }}>
          PC Builder - Build Your Own Computer
        </Typography.Title>
        <Space className="price-item-card">
          <Typography.Title level={4} style={{ color: "#fff", margin: 0 }}>
            {totalPrice}৳
          </Typography.Title>
        </Space>
      </div>
      <p className="core-heading">Core Components</p>
      <div className="flex-vertical" style={{ marginBottom: 20 }}>
        <div className=" border-bottom">
          <div className="flex-between">
            <Typography.Text level={5} style={{ margin: 0 }}>
              CPU
            </Typography.Text>
            <Link href="/tool/processor">
              <Button>Choose</Button>
            </Link>
          </div>
          {processor && (
            <div className="flex-between">
              <Image
                src={processor.image}
                alt="processor"
                width={50}
                height={50}
              />
              <Typography.Text level={5} style={{ margin: 0 }}>
                {processor.name}
              </Typography.Text>
              <h4>{processor.price}৳</h4>
              <Button
                icon={<CloseOutlined />}
                onClick={() => dispatch(removeToPcBuild(processor._id))}
              ></Button>
            </div>
          )}
        </div>
        <div className="border-bottom">
          <div className="flex-between">
            <Typography.Text level={5} style={{ margin: 0 }}>
              Motherboard
            </Typography.Text>
            <Link href="/tool/motherboard">
              <Button>Choose</Button>
            </Link>
          </div>
          {motherboard && (
            <div className="flex-between">
              <Image
                src={motherboard.image}
                alt="processor"
                width={50}
                height={50}
              />
              <Typography.Text level={5} style={{ margin: 0 }}>
                {motherboard.name}
              </Typography.Text>
              <h4>{motherboard.price}৳</h4>
              <Button
                icon={<CloseOutlined />}
                onClick={() => dispatch(removeToPcBuild(motherboard._id))}
              ></Button>
            </div>
          )}
        </div>
        <div className="border-bottom">
          <div className="flex-between">
            <Typography.Text level={5} style={{ margin: 0 }}>
              RAM
            </Typography.Text>
            <Link href="/tool/ram">
              <Button>Choose</Button>
            </Link>
          </div>
          {ram && (
            <div className="flex-between">
              <Image src={ram.image} alt="processor" width={50} height={50} />
              <Typography.Text level={5} style={{ margin: 0 }}>
                {ram.name}
              </Typography.Text>
              <h4>{ram.price}৳</h4>
              <Button
                icon={<CloseOutlined />}
                onClick={() => dispatch(removeToPcBuild(ram._id))}
              ></Button>
            </div>
          )}
        </div>
        <div className="border-bottom">
          <div className="flex-between">
            <Typography.Text level={5} style={{ margin: 0 }}>
              Power Supply Unit
            </Typography.Text>
            <Link href="/tool/power-supply">
              <Button>Choose</Button>
            </Link>
          </div>
          {powerSupply && (
            <div className="flex-between">
              <Image
                src={powerSupply.image}
                alt="processor"
                width={50}
                height={50}
              />
              <Typography.Text level={5} style={{ margin: 0 }}>
                {powerSupply.name}
              </Typography.Text>
              <h4>{powerSupply.price}৳</h4>
              <Button
                icon={<CloseOutlined />}
                onClick={() => dispatch(removeToPcBuild(powerSupply._id))}
              ></Button>
            </div>
          )}
        </div>
        <div className="border-bottom">
          <div className="flex-between">
            <Typography.Text level={5} style={{ margin: 0 }}>
              Storage Device
            </Typography.Text>
            <Link href="/tool/storage-device">
              <Button>Choose</Button>
            </Link>
          </div>
          {storageDevice && (
            <div className="flex-between">
              <Image
                src={storageDevice.image}
                alt="processor"
                width={50}
                height={50}
              />
              <Typography.Text level={5} style={{ margin: 0 }}>
                {storageDevice.name}
              </Typography.Text>
              <h4>{storageDevice.price}৳</h4>
              <Button
                icon={<CloseOutlined />}
                onClick={() => dispatch(removeToPcBuild(storageDevice._id))}
              ></Button>
            </div>
          )}
        </div>
        <div>
          <div className="flex-between">
            <Typography.Text level={5} style={{ margin: 0 }}>
              Monitor
            </Typography.Text>
            <Link href="/tool/monitor">
              <Button>Choose</Button>
            </Link>
          </div>
          {monitor && (
            <div className="flex-between">
              <Image
                src={monitor.image}
                alt="processor"
                width={50}
                height={50}
              />
              <Typography.Text level={5} style={{ margin: 0 }}>
                {monitor.name}
              </Typography.Text>
              <h4>{monitor.price}৳</h4>
              <Button
                icon={<CloseOutlined />}
                onClick={() => dispatch(removeToPcBuild(monitor._id))}
              ></Button>
            </div>
          )}
        </div>
      </div>
      <Button
        type="primary"
        block
        disabled={totalItems !== 6}
        onClick={() => {
          dispatch(completeBuild());
          success();
        }}
      >
        Complete Build
      </Button>
    </section>
  );
};

export default PcBuilderPage;
