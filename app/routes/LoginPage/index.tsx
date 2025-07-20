import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

import * as s from './style.css';

import TopBar from '@/common/components/TopBar';
import onClickKakaoLogin from '@/common/utils/kakaoLogin';
import Icon from '@/lib/assets/icons';
import Background from '@/lib/assets/images/login-background.webp';
import KoreapasLogo from '@/lib/assets/images/koreapas.png';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';

const Login = () => {
  const navigate = useNavigate();
  const { data: isAuthenticated, isSuccess, isLoading } = useGetAuthCheck();

  useEffect(() => {
    if (isSuccess && isAuthenticated) {
      navigate(-1);
    }
  }, [isAuthenticated, isSuccess, navigate]);

  if (isLoading || isAuthenticated) return null;

  return (
    <>
      <TopBar>
        <p className={s.LoginText}>로그인</p>
      </TopBar>
      <div className={s.ButtonContainer}>
        <Link to="/login/koreapas" className={s.LoginButton({ src: 'koreapas' })}>
          <img className={s.LoginButtonIcon({ src: 'koreapas' })} src={KoreapasLogo} />
          <p className={s.LoginButtonText({ src: 'koreapas' })}>고파스로 시작하기</p>
        </Link>
        <button className={s.LoginButton({ src: 'kakao' })} onClick={onClickKakaoLogin}>
          <span className={s.LoginButtonIcon({ src: 'kakao' })}>
            <Icon.KakaoLogo />
          </span>
          <p className={s.LoginButtonText({ src: 'kakao' })}>카카오로 시작하기</p>
        </button>
      </div>
      <div className={s.BackgroundFilter} />
      <img className={s.Background} src={Background} />
    </>
  );
};
export default Login;
