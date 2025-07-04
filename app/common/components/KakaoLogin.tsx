import Icon from '@/libs/assets/icons';
import onClickKakaoLogin from '@/common/utils/kakaoLogin';

const KakaoLogin = () => {
  // TODO: 확정 디자인에 맞춰 수정
  return (
    <button
      className="flex cursor-pointer flex-row items-center gap-[3px] rounded-[6px] bg-[#FEE500] px-3.5 py-2 text-[14px]"
      onClick={onClickKakaoLogin}
    >
      <Icon.KakaoLogo />
      로그인
    </button>
  );
};
export default KakaoLogin;
