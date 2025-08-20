import type { PlayerInterface } from '@/lib/types/player';
import * as s from './style.css';

import Icon from '@/lib/assets/icons';

interface Props {
  player?: PlayerInterface;
  onClick: () => void;
  isSelected: boolean;
}
const PlayerItem = ({ player, isSelected, onClick }: Props) => {
  const isPlayer = !!player;
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
            <p className={s.PositionStyle}>{player.position}</p>
            <p>{player.name}</p>
          </>
        ) : (
          // TODO: 스포츠마다 워딩 바꿔야 할 듯
          <p>득점 없음</p>
        )}
      </div>
    </button>
  );
};
export default PlayerItem;
