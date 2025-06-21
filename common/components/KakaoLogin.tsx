import Icon from '@/assets/icons';
import { onClickKakaoLogin } from '@/common/utils/kakaoLogin';

const KakaoLogin = () => {
  // TODO: 확정 디자인에 맞춰 수정
  return (
    <button
      className="bg-[#FEE500] py-2 px-3.5 rounded-[6px] flex flex-row items-center gap-[3px] text-[14px] cursor-pointer"
      onClick={onClickKakaoLogin}
    >
      <Icon.KakaoLogo />
      로그인
    </button>
  );
};
export default KakaoLogin;
