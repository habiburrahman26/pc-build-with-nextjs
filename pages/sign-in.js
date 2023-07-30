import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { signIn } from 'next-auth/react';

const SignInPage = () => {
  return (
    <div className="signIn">
      <Button
        icon={<GithubOutlined />}
        onClick={() =>
          signIn('github', {
            callbackUrl: 'https://pc-build-with-nextjs.vercel.app',
          })
        }
      >
        SignIn with Github
      </Button>
    </div>
  );
};

export default SignInPage;
