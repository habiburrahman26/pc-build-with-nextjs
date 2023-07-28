import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignInPage = () => {
  const router = useRouter();

  const redirectUrl = router.query.callbackUrl ? router.query.callbackUrl : '/';

  return (
    <div className="signIn">
      <Button
        icon={<GithubOutlined />}
        onClick={() =>
          signIn('github', {
            callbackUrl: redirectUrl,
          })
        }
      >
        SignIn with Github
      </Button>
    </div>
  );
};

export default SignInPage;
