import TopBar from '@/common/components/TopBar';
import KoreapasLogo from '@/lib/assets/images/koreapasLogo.png';
import KoreapasLoginForm from '@/domain/login/components/KoreapasLoginForm';

import * as s from './style.css';

const KoreapasLoginPage = () => {
  return (
    <div className={s.Container}>
      <TopBar color="d9" />
      <div className={s.Content}>
        <img className={s.Logo} src={KoreapasLogo} />
        <div className={s.Wrapper}>
          <KoreapasLoginForm />
          <div className={s.SignUpLinkWrapper}>
            <p className={s.SignUpInstruction}>고파스 계정이 없으신가요?</p>
            <a href="https://www.koreapas.com/m/member_join_new.php" className={s.SignUpLink}>
              회원가입
            </a>
            {/* TODO: TOKY용 회원가입 페이지 연결 */}
          </div>
        </div>
      </div>
      <p className={s.Copyright}>© 모두의 캠퍼스</p>
    </div>
  );
};
export default KoreapasLoginPage;
