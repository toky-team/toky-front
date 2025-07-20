import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import useGetAuthCheck from '@/common/apis/useGetAuthCheck';

const AuthGuard = () => {
  const navigate = useNavigate();
  const { data: isAuthenticated, isSuccess, isLoading } = useGetAuthCheck();

  useEffect(() => {
    if (isSuccess && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isSuccess, navigate]);

  if (isLoading || !isAuthenticated) return null;

  return <Outlet />;
};
export default AuthGuard;
