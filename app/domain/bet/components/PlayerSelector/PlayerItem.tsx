import * as s from './style.css';

import Icon from '@/lib/assets/icons';

interface Props {
  playerInfo?: {
    name: string;
  };
}
const PlayerItem = ({ playerInfo }: Props) => {
  const isPlayer = !!playerInfo;
  return (
    <div className={s.PlayerItemContainer}>
      <div className={s.PlayerItemImage()}>{isPlayer ? <img /> : <Icon.Ban />}</div>
      <div className={s.PlayerItemText({ isPlayer })}>
        {isPlayer ? (
          <>
            <p>{playerInfo.name}</p>
            <p>포지션</p>
          </>
        ) : (
          // TODO: 스포츠마다 워딩 바꿔야 할 듯
          <p>득점 없음</p>
        )}
      </div>
    </div>
  );
};
export default PlayerItem;
