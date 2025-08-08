import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import useGetAuthCheck from '@/common/apis/useGetAuthCheck';

const AuthGuard = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetAuthCheck();

  const isSignup = data?.isSignup || false;

  useEffect(() => {
    if (isSuccess && !isSignup) {
      navigate('/login', { replace: true });
    }
  }, [isSignup, isSuccess, navigate]);

  if (isLoading || !isSignup) return null;

  return <Outlet />;
};
export default AuthGuard;
