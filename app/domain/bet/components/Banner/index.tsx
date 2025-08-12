import * as s from './style.css';

const Banner = () => {
  return (
    <div className={s.Container}>
      <div>배너배너</div>
      <div className={s.ButtonWrapper}>
        <button className={s.ButtonStyle({ type: 'primary' })}>더 알아보기</button>
        <button className={s.ButtonStyle({ type: 'secondary' })}>내 예측 공유하기</button>
      </div>
    </div>
  );
};
export default Banner;
