import { SportArray, SportsToIndexMap, type SportType } from '@/lib/types';

import * as s from './style.css';
import Icon from '@/lib/assets/icons';

interface Props {
  curSport: SportType;
  handleNav: (sport: SportType) => void;
}
const PredictionBottomBar = ({ curSport, handleNav }: Props) => {
  const endIndex = SportArray.length - 1;

  const canGoPrev = curSport !== SportArray[0].id;
  const canGoNext = curSport !== SportArray[endIndex].id;
  return (
    <div className={s.Container}>
      <button
        className={s.NavButton}
        onClick={() => {
          if (canGoPrev) {
            handleNav(SportArray[SportsToIndexMap[curSport] - 1].id);
          }
        }}
      >
        {canGoPrev && (
          <>
            <Icon.SportNavArrow />
            {SportArray[SportsToIndexMap[curSport] - 1].value}
          </>
        )}
      </button>
      <button
        className={s.NavButton}
        onClick={() => {
          if (canGoNext) {
            handleNav(SportArray[SportsToIndexMap[curSport] + 1].id);
          }
        }}
      >
        {canGoNext && (
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
