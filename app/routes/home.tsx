import CustomCarousel from '@/common/components/CustomCarousel';
import MainTopBar from '@/common/components/MainTopBar';
import NavBar from '@/common/components/NavBar';
import ActionCard from '@/domain/home/components/ActionCard';
import AdsCarousel from '@/domain/home/components/AdsCarousel';
import LoginCard from '@/domain/home/components/LoginCard';
import ScheduleCarousel from '@/domain/home/components/ScheduleCarousel';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import ShortRankChart from '@/domain/home/components/ShortRankChart';
import bannerGuide from '@/lib/assets/images/banner_guide.webp';
import bannerAttendance from '@/lib/assets/images/banner_attendance.webp';
import { useGetIsAnswerSet } from '@/common/apis/useGetIsAnswerSet';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Home() {
  const slides = [
    { id: '1', image: bannerGuide, alt: '가이드', link: '/guide' }, // TODO: 가이드 페이지로 리다이렉트
    { id: '2', image: bannerAttendance, alt: '출석퀴즈', link: '/attendance' },
  ];

  const { data: isAnswerSet } = useGetIsAnswerSet();

  const { data: auth } = useGetAuthCheck();
  const isLoggedIn = Boolean(auth?.isSignup);
  const navigate = useNavigate();

  const ChartType = isAnswerSet ? 'betRate' : 'activity';

  return (
    <>
      <MainTopBar />
      <NavBar />
      <CustomCarousel slides={slides} />
      <div className="flex flex-col items-center justify-center gap-8 px-5 py-8">
        {!isLoggedIn && <LoginCard />}
        <ActionCard />
        <div className="flex w-full flex-col gap-3">
          <div className="text-lg font-bold">정기전 일정</div>
          <ScheduleCarousel />
        </div>
        <AdsCarousel />
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-row justify-between">
            <div className="text-lg font-bold">적중률 랭킹</div>
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
