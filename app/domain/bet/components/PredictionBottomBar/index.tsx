import { SportArray, SportsToIndexMap, type SportType } from '@/lib/types';

import * as s from './style.css';
import Icon from '@/lib/assets/icons';

interface Props {
  curSport: SportType;
  handleNav: (sport: SportType) => void;
}
const PredictionBottomBar = ({ curSport, handleNav }: Props) => {
  const endIndex = SportArray.length - 1;
  return (
    <div className={s.Container}>
      <button className={s.NavButton} onClick={() => handleNav(SportArray[SportsToIndexMap[curSport] - 1].id)}>
        {curSport !== SportArray[0].id && (
          <>
            <Icon.SportNavArrow />
            {SportArray[SportsToIndexMap[curSport] - 1].value}
          </>
        )}
      </button>
      <button className={s.NavButton} onClick={() => handleNav(SportArray[SportsToIndexMap[curSport] + 1].id)}>
        {curSport !== SportArray[endIndex].id && (
          <>
            {SportArray[SportsToIndexMap[curSport] + 1].value}
            <Icon.SportNavArrow rotate={180} />
          </>
        )}
      </button>
    </div>
  );
};
export default PredictionBottomBar;
