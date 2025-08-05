import UnivButton from '@/domain/signup/components/SignupFunnel/SetUniv/UnivButton';
import * as s from './style.css';

const SetUniv = () => {
  return (
    <div className={s.Container}>
      <label>
        <strong className={s.Strong}>학교</strong>를 선택해주세요.
      </label>
      <div className={s.ButtonWrapper}>
        <UnivButton univ="고려대학교" />
        <UnivButton univ="연세대학교" />
      </div>
    </div>
  );
};
export default SetUniv;
