import type { UniversityType } from '@/lib/types';
import * as s from './style.css';

import type { PlayerInterface } from '@/lib/types/player';

interface Props {
  university: UniversityType;
  status: UniversityType | null;
  selectedPlayer: PlayerInterface | null;
  onClick: () => void;
}
const SelectedPlayerView = ({ university, status, selectedPlayer, onClick }: Props) => {
  return (
    <button
      className={s.SelectedPlayerView({
        status: selectedPlayer !== null ? 'selected' : status === university ? 'selecting' : 'default',
        university,
      })}
      onClick={onClick}
    >
      {selectedPlayer !== null ? (
        <>
          <div className={s.SelectedPlayerViewText}>
            <p>{university}</p>
            <p className={s.SelectedPlayerViewName}>{selectedPlayer.name}</p>
          </div>
          <img className={s.SelectedPlayerViewImage} src={selectedPlayer.imageUrl} />
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
