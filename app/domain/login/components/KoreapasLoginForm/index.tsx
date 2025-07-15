import * as s from './style.css';

const KoreapasLoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form className={s.Container} onSubmit={handleSubmit}>
      <div className={s.InputWrapper}>
        <input className={s.InputStyle} type="email" placeholder="이메일" />
        <input className={s.InputStyle} type="password" placeholder="비밀번호" />
      </div>
      <button className={s.ButtonStyle} type="submit">
        고파스로 시작하기
      </button>
    </form>
  );
};
export default KoreapasLoginForm;
