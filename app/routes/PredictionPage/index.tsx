import MainTopBar from '@/common/components/MainTopBar';
import NavBar from '@/common/components/NavBar';
import SportNav from '@/domain/bet/components/SportNav';
import type { SportType } from '@/lib/types';
import { useSearchParams } from 'react-router';

const PredictionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sport = (searchParams.get('sport') as SportType) || '야구';
  const setSport = (sport: SportType) => {
    searchParams.set('sport', sport);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <MainTopBar />
      <NavBar />
      <SportNav curSport={sport} setSport={setSport} />
    </div>
  );
};
export default PredictionPage;
