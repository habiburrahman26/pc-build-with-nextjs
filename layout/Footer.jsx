import { Layout } from 'antd';
import React from 'react';

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      ©{new Date().getFullYear()} Created by Habibur Rahman
    </Layout.Footer>
  );
};

export default Footer;
