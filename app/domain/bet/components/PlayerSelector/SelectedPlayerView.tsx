import type { UniversityType } from '@/lib/types';
import * as s from './style.css';

import type { PlayerInterface } from '@/lib/types/player';
import defaultImage from '@/lib/assets/images/playerPlaceholder.png';

interface Props {
  university: UniversityType;
  status: UniversityType | null;
  selectedPlayer: PlayerInterface | null | undefined;
  onClick: () => void;
}
const SelectedPlayerView = ({ university, status, selectedPlayer, onClick }: Props) => {
  return (
    <button
      className={s.SelectedPlayerView({
        status: selectedPlayer !== undefined ? 'selected' : status === university ? 'selecting' : 'default',
        university,
      })}
      onClick={onClick}
    >
      {selectedPlayer !== undefined ? (
        <>
          <div className={s.SelectedPlayerViewText}>
            <p>{university}</p>
            <p className={s.SelectedPlayerViewName}>{selectedPlayer?.name || '득점 없음'}</p>
          </div>
          <img className={s.SelectedPlayerViewImage} src={selectedPlayer?.imageUrl || defaultImage} />
        </>
      ) : (
        <>
          <p className={s.UnivTitle}>{university}</p>
          선수보기
        </>
      )}
    </button>
  );
};
export default SelectedPlayerView;
