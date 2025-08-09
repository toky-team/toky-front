import SportSelector from '@/domain/bet/components/SportNav/SportSelector';
import { SportArray, type SportType } from '@/lib/types';

import * as s from './style.css';

interface Props {
  curSport: SportType;
  setSport: (sport: SportType) => void;
}
const SportNav = ({ curSport, setSport }: Props) => {
  return (
    <div className={s.Container}>
      {SportArray.map((sport) => (
        <SportSelector key={sport.id} isSelected={curSport === sport.id} onClick={() => setSport(sport.id)}>
          {sport.value}
        </SportSelector>
      ))}
    </div>
  );
};
export default SportNav;
