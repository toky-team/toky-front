import CustomCarousel from '@/common/components/CustomCarousel';
import LoginCard from '@/domain/home/components/LoginCard';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import bannerGuide from '@/lib/assets/images/banner_guide.webp';
import bannerAttendance from '@/lib/assets/images/banner_attendance.webp';

export function HomeWhenNotLive() {
  const slides = [
    { id: '1', image: bannerGuide, alt: '가이드', link: '/guide' },
    { id: '2', image: bannerAttendance, alt: '출석퀴즈', link: '/attendance' },
  ];
  const { data: auth } = useGetAuthCheck();
  const isLoggedIn = Boolean(auth?.isSignup);

  return (
    <>
      <CustomCarousel slides={slides} />
      <div className="flex flex-col items-center justify-center gap-8 px-5 py-8">
        <LoginCard isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
}


