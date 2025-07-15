import TopBar from '@/common/components/TopBar';
import onClickKakaoLogin from '@/common/utils/kakaoLogin';
import Icon from '@/lib/assets/icons';
import Background from '@/lib/assets/images/login-background.webp';
import KoreapasLogo from '@/lib/assets/images/koreapas.png';

import * as s from './style.css';

const Login = () => {
  return (
    <>
      <TopBar>
        <p className={s.LoginText}>로그인</p>
      </TopBar>
      <div className={s.ButtonContainer}>
        <button className={s.LoginButton({ src: 'koreapas' })}>
          <img className={s.LoginButtonIcon({ src: 'koreapas' })} src={KoreapasLogo} />
          <p className={s.LoginButtonText({ src: 'koreapas' })}>고파스로 시작하기</p>
        </button>
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
