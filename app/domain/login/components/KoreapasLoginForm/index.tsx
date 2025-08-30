import { useState } from 'react';

import * as s from './style.css';
import { usePostKopasLogin } from '@/domain/login/apis/usePostKopasLogin';
import { useNavigate } from 'react-router';

const KoreapasLoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login } = usePostKopasLogin();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id && password) {
      login(
        { id, password },
        {
          onSuccess: (response) => {
            if (response.isRegistered) {
              navigate('/', { replace: true });
            } else {
              navigate('/signup', { replace: true });
            }
          },
          onError: () => {
            setError(true);
          },
        },
      );
    }
  };

  return (
    <form className={s.Container} onSubmit={handleSubmit}>
      <div className={s.InputWrapper}>
        <input
          className={s.InputStyle}
          placeholder="아이디"
          value={id}
          onChange={(e) => {
            setError(false);
            setId(e.target.value);
          }}
        />
        <input
          className={s.InputStyle}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => {
            setError(false);
            setPassword(e.target.value);
          }}
        />
        <div className={s.ErrorWrapper}>{error && '아이디 또는 비밀번호를 다시 확인해주세요'}</div>
      </div>
      <button className={s.ButtonStyle} type="submit">
        고파스로 시작하기
      </button>
    </form>
  );
};
export default KoreapasLoginForm;
