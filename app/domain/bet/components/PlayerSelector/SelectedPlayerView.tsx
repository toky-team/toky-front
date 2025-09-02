import type { SportType, UniversityType } from '@/lib/types';
import * as s from './style.css';

import type { PlayerInterface } from '@/lib/types/player';
import defaultImage from '@/lib/assets/images/playerPlaceholder.png';
import getNoPlayerSelectText from '@/domain/bet/utils/getNoPlayerSelectText';

interface Props {
  university: UniversityType;
  status: UniversityType | null;
  selectedPlayer: PlayerInterface | null | undefined;
  onClick: () => void;
  sport: SportType;
}
const SelectedPlayerView = ({ university, status, selectedPlayer, onClick, sport }: Props) => {
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
            <p className={s.SelectedPlayerViewName}>{selectedPlayer?.name || getNoPlayerSelectText(sport)}</p>
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
