import MainTopBar from '@/common/components/MainTopBar';
import NavBar from '@/common/components/NavBar';
import { HomeWhenLive } from '@/domain/home/components/HomeWhenLive';
import { HomeWhenNotLive } from '@/domain/home/components/HomeWhenNotLive';
import ActionCard from '@/domain/home/components/ActionCard';
import AdsCarousel from '@/domain/home/components/AdsCarousel';
import ScheduleCarousel from '@/domain/home/components/ScheduleCarousel';
import ShortRankChart from '@/domain/home/components/ShortRankChart';
import { useGetScore } from '@/domain/live/apis/useGetScore';
import { useGetIsAnswerSet } from '@/common/apis/useGetIsAnswerSet';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Home() {
  const { data: isAnswerSet, isLoading: isLoadingAnswerSet } = useGetIsAnswerSet();
  const navigate = useNavigate();

  const { data: scoreSoccer, isLoading: isLoadingSoccer } = useGetScore('축구');
  const { data: scoreBaseball, isLoading: isLoadingBaseball } = useGetScore('야구');
  const { data: scoreBasketball, isLoading: isLoadingBasketball } = useGetScore('농구');
  const { data: scoreRugby, isLoading: isLoadingRugby } = useGetScore('럭비');
  const { data: scoreIcehockey, isLoading: isLoadingIcehockey } = useGetScore('아이스하키');

  const statuses = [
    scoreSoccer?.matchStatus,
    scoreBaseball?.matchStatus,
    scoreBasketball?.matchStatus,
    scoreRugby?.matchStatus,
    scoreIcehockey?.matchStatus,
  ];
  const isLoadingAny = isLoadingSoccer || isLoadingBaseball || isLoadingBasketball || isLoadingRugby || isLoadingIcehockey;
  const isLive = !isLoadingAny && statuses.some((status) => status === '진행 중');
  const ChartType = isAnswerSet ? 'betRate' : 'activity';

  return (
    <>
      <MainTopBar />
      <NavBar />
      {isLoadingAny ? (
        <HomeWhenNotLive />
      ) : isLive ? (
        <HomeWhenLive />
      ) : (
        <HomeWhenNotLive />
      )}
      <div className="flex flex-col items-center justify-center gap-8 px-5 pb-8">
        <ActionCard />
        <div className="flex w-full flex-col gap-3">
          <div className="text-lg font-bold">정기전 일정</div>
          <ScheduleCarousel />
        </div>
        <AdsCarousel />
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-row justify-between">
            {/* TODO: 고연전 기간 이후 적중률 랭킹으로 수정 */}
            <div className="text-lg font-bold">활동 랭킹</div>
            <button
              className="flex items-center text-sm leading-normal font-normal tracking-tight text-white/60"
              onClick={() => navigate('/ranking')}
            >
              자세히보기 <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <ShortRankChart type={ChartType} />
        </div>
      </div>
    </>
  );
}
