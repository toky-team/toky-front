import { InputBox } from '@/common/components/InputBox';
import { useSignupError, useSignupForm } from '@/domain/signup/stores/SignupFormStore';

import * as c from '../style.css';
import * as s from './style.css';

const SetName = () => {
  const name = useSignupForm((state) => state.name);
  const setName = useSignupForm((state) => state.setName);
  const { error, clearError } = useSignupError();

  return (
    <div className={c.Wrapper}>
      <div className={c.Guide}>
        <p className={c.Description}>나중에 수정 가능해요!</p>
        <h2>
          <strong className={c.Strong}>닉네임</strong>을 입력해주세요.
        </h2>
      </div>
      <div className={c.FormWrapper}>
        <InputBox
          placeholder="닉네임"
          value={name}
          setValue={setName}
          error={error === 'name'}
          maxLength={10}
          clearError={clearError}
        />
        <div className={s.InputStatus}>
          <span>{name.length}/10</span>
          {error === 'name' && <span className={c.ErrorMessage}>이미 존재하는 닉네임 입니다.</span>}
        </div>
      </div>
    </div>
  );
};
export default SetName;
