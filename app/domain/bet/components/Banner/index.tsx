import banner from '@/lib/assets/images/prediction-banner-title.svg';

import * as s from './style.css';
import { Link } from 'react-router';

interface Props {
  openShareModal: () => Promise<boolean>;
}
const Banner = ({ openShareModal }: Props) => {
  return (
    <div className={s.Container}>
      <img src={banner} alt="banner" />
      <div className={s.ButtonWrapper}>
        {/* TODO: 링크 바꿔끼우기 */}
        <Link className={s.ButtonStyle({ type: 'primary' })} to="/guide">
          더 알아보기
        </Link>
        <button className={s.ButtonStyle({ type: 'secondary' })} onClick={openShareModal}>
          내 예측 공유하기
        </button>
      </div>
    </div>
  );
};
export default Banner;
