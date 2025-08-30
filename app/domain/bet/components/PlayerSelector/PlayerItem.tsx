import type { PlayerInterface } from '@/lib/types/player';
import * as s from './style.css';

import Icon from '@/lib/assets/icons';
import getNoPlayerSelectText from '@/domain/bet/utils/getNoPlayerSelectText';
import type { SportType } from '@/lib/types';

interface Props {
  sport: SportType;
  player?: PlayerInterface;
  onClick: () => void;
  isSelected: boolean;
}
const PlayerItem = ({ sport, player, isSelected, onClick }: Props) => {
  const isPlayer = !!player;
  const positionString =
    sport === '야구' && player?.university === '고려대학교' ? player.position?.split('(')[0] : player?.position;
  return (
    <button className={s.PlayerItemContainer} onClick={onClick}>
      <div className={s.PlayerImageClipper}>
        <div className={s.PlayerItemImage({ isSelected })}>
          {isPlayer ? (
            <>
              {isSelected ? (
                <div className={s.CheckIcon}>
                  <Icon.CheckCircle />
                </div>
              ) : (
                <div className={s.BackNumber}>{player.backNumber}</div>
              )}
              <img className={s.PlayerImage} src={player.imageUrl} />
            </>
          ) : (
            <Icon.Ban />
          )}
        </div>
      </div>
      <div className={s.PlayerItemText({ isPlayer })}>
        {isPlayer ? (
          <>
            <p className={s.PositionStyle}>{positionString}</p>
            <p className={s.PlayerName}>{player.name}</p>
          </>
        ) : (
          <p>{getNoPlayerSelectText(sport)}</p>
        )}
      </div>
    </button>
  );
};
export default PlayerItem;
