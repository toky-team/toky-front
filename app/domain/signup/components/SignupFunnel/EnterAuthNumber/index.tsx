import { InputBox } from '@/common/components/InputBox';

import * as s from './style.css';
import * as c from '../style.css';

import { useSignupError, useSignupForm } from '@/domain/signup/stores/SignupFormStore';

const EnterAuthNumber = () => {
  const authNumber = useSignupForm((state) => state.authNumber);
  const setAuthNumber = useSignupForm((state) => state.setAuthNumber);
  const { error, clearError } = useSignupError();

  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>
        문자로 도착한
        <br />
        <strong className={c.Strong}>인증번호</strong>를 입력해주세요.
      </h2>
      <div className={c.FormWrapper}>
        <InputBox
          placeholder="인증번호"
          value={authNumber}
          setValue={setAuthNumber}
          error={error === 'authNumber'}
          clearError={clearError}
        />
        <div className={c.ErrorMessageWrapper}>
          {error === 'authNumber' && <div className={c.ErrorMessage}>인증번호가 일치하지 않습니다.</div>}
        </div>
      </div>
    </div>
  );
};
export default EnterAuthNumber;
