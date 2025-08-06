import { InputBox } from '@/common/components/InputBox';
import * as c from '../style.css';
import { useSignupError, useSignupForm } from '@/domain/signup/stores/SignupFormStore';

const SetPhoneNumber = () => {
  const phoneNumber = useSignupForm((state) => state.phoneNumber);
  const setPhoneNumber = useSignupForm((state) => state.setPhoneNumber);
  const { error, clearError } = useSignupError();

  const setValue = (input: string) => {
    const reg = /\D/g;
    input = input.replace(reg, '');
    setPhoneNumber(input);
  };

  return (
    <div className={c.Wrapper}>
      <div className={c.Guide}>
        <p className={c.Description}>경품 지급을 위해 필요한 정보이니, 정확히 입력해주세요!</p>
        <h2>
          <strong className={c.Strong}>전화번호</strong>를 입력해주세요.
        </h2>
      </div>
      <div className={c.FormWrapper}>
        <InputBox
          value={phoneNumber}
          setValue={setValue}
          inputType="number"
          placeholder="전화번호"
          maxLength={11}
          clearError={clearError}
          error={error === 'phoneNumber'}
        />
        <div className={c.ErrorMessageWrapper}>
          {error === 'phoneNumber' && <p className={c.ErrorMessage}>이미 사용 중인 전화번호입니다.</p>}
        </div>
      </div>
    </div>
  );
};
export default SetPhoneNumber;
