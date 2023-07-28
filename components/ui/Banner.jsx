import React from 'react';
import { Carousel, Image, Typography } from 'antd';
import img1 from '@/pages/assets/image/img1.jpg';
import img2 from '@/pages/assets/image/img2.jpg';
// import Image from 'next/image';

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: 10 }}>
    <div className="relative">
      <Image
        src={
          'https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        }
        alt="slider"
        width="100%"
        height={500}
        preview={false}
        style={{ opacity: 0.4 }}
      />
      <div className="absolute">
        <Typography.Title style={{ color: ' #3749bb' }}>
          Build your dream PC with us
        </Typography.Title>
      </div>
    </div>
    <div>
      <Image
        src={
          'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80'
        }
        alt="slider"
        width="100%"
        height={500}
        preview={false}
        style={{ opacity: 0.5 }}
      />
      <div className="absolute">
        <Typography.Title style={{ color: ' #3749bb' }}>
          Build your dream PC with us
        </Typography.Title>
      </div>
    </div>
  </Carousel>
);
export default Banner;
