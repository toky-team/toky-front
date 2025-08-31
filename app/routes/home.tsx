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

export default function Home() {
  const slides = [
    { id: '1', image: bannerGuide, alt: '가이드' }, // TODO: 가이드 페이지로 리다이렉트
    { id: '2', image: bannerAttendance, alt: '출석퀴즈', link: '/attendance' },
  ];

  const { data: auth } = useGetAuthCheck();
  const isLoggedIn = Boolean(auth?.isSignup);

  return (
    <div>
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
        <div className="flex w-full flex-row justify-between">
          <div className="text-lg font-bold">적중률 랭킹</div>
          <div className="text-sm text-gray-500">자세히 보기</div>
        </div>
        <ShortRankChart />
      </div>
    </div>
  );
}
