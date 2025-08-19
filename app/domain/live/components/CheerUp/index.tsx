import Icon from '@/lib/assets/icons';
import * as s from './style.css';

const CheerUp = () => {
  return (
    <div className={s.Container}>
      <button className={s.LikeButton({ univ: 'korea' })}>
        <Icon.Heart />
        <p className={s.LikeCount}>100</p>
      </button>
      <button className={s.LikeButton({ univ: 'yonsei' })}>
        <Icon.Heart />
        <p className={s.LikeCount}>100</p>
      </button>
    </div>
  );
};
export default CheerUp;
