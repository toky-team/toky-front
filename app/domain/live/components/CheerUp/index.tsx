import Icon from '@/lib/assets/icons';
import * as s from './style.css';
import { useGetLike } from '@/domain/live/apis/useGetLike';
import type { SportType, UniversityType } from '@/lib/types';
import useCheerUpSocket from '@/domain/live/hooks/useCheerUpSocket';
import { cheerUpSocket } from '@/common/utils/socket';

interface Props {
  sport: SportType;
}
const CheerUp = ({ sport }: Props) => {
  const { data } = useGetLike(sport);
  useCheerUpSocket(sport);

  const handleLike = (university: UniversityType) => {
    cheerUpSocket.emit('add_like', { sport, university, likes: 1 });
  };

  if (!data) return null;

  return (
    <div className={s.Container}>
      <button className={s.LikeButton({ univ: 'korea' })} onClick={() => handleLike('고려대학교')}>
        <Icon.Heart />
        <p className={s.LikeCount}>{data.KULike}</p>
      </button>
      <button className={s.LikeButton({ univ: 'yonsei' })} onClick={() => handleLike('연세대학교')}>
        <Icon.Heart />
        <p className={s.LikeCount}>{data.YULike}</p>
      </button>
    </div>
  );
};
export default CheerUp;
