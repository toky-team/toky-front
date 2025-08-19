import * as s from './style.css';

interface Props {
  progress: number;
  totalProgress: number;
  clickable: boolean;
  onClick: () => void;
}
const SignupFooter = ({ progress, totalProgress, clickable, onClick }: Props) => {
  return (
    <button className={s.Container({ clickable })} onClick={onClick}>
      {progress === totalProgress - 1 ? '토키 시작하기' : progress === totalProgress - 2 ? '회원가입 완료' : '다음'}
    </button>
  );
};
export default SignupFooter;
