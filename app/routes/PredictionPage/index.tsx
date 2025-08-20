import MainTopBar from '@/common/components/MainTopBar';
import NavBar from '@/common/components/NavBar';
import PredictionBottomBar from '@/domain/bet/components/PredictionBottomBar';
import PredictionContents from '@/domain/bet/components/PredictionContents';
import SportNav from '@/domain/bet/components/SportNav';
import type { SportType } from '@/lib/types';
import { useSearchParams } from 'react-router';
import * as s from './style.css';
import Banner from '@/domain/bet/components/Banner';
import { useShareModal } from '@/domain/bet/hooks/useShareModal';
import { Suspense } from 'react';

const PredictionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sport = (searchParams.get('sport') as SportType) || '야구';
  const setSport = (sport: SportType) => {
    searchParams.set('sport', sport);
    setSearchParams(searchParams);
  };
  const { openShareModal } = useShareModal();

  return (
    <div className={s.Container}>
      <MainTopBar />
      <NavBar />
      <Banner openShareModal={openShareModal} />
      <SportNav curSport={sport} setSport={setSport} />
      <Suspense>
        <PredictionContents sport={sport} />
      </Suspense>
      <PredictionBottomBar curSport={sport} handleNav={setSport} />
    </div>
  );
};
export default PredictionPage;
