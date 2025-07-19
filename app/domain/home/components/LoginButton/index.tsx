import { useNavigate } from 'react-router';

import * as s from './style.css';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <button className={s.Wrapper} onClick={handleClick}>
      로그인
    </button>
  );
};
export default LoginButton;
