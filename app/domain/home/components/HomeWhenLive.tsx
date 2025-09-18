import LoginCard from '@/domain/home/components/LoginCard';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import { LiveTabs } from '@/domain/home/components/LiveTabs';
import type { SportType } from '@/lib/types';
import ScoreBoard from '@/domain/home/components/ScoreBoard';

export function HomeWhenLive({ statusBySport }: { statusBySport: Partial<Record<SportType, '시작 전' | '진행 중' | '종료'>> }) {
  const { data: auth } = useGetAuthCheck();
  const isLoggedIn = Boolean(auth?.isSignup);

  return (
    <div className="relative flex flex-col items-center justify-center pt-4 pb-8 bg-[#121212] bg-[linear-gradient(0deg,rgba(59,0,225,0)_3.75%,rgba(59,0,225,0.2)_100%)]">
      <div className="pointer-events-none w-[280px] h-[280px] absolute left-1/2 -translate-x-1/2 top-[-120px] rounded-[280px] border border-transparent bg-[linear-gradient(180deg,rgba(86,64,255,0)_30.4%,rgba(116,32,234,0.20)_65.2%,rgba(255,255,255,0.20)_100%)] blur-[40px]" />
      <ScoreBoard />
      <div className="w-full px-5">
        {isLoggedIn || (
          <LoginCard isLoggedIn={isLoggedIn} backgroundColor="white10" />
        )}
      </div>
      <LiveTabs statusBySport={statusBySport} />
    </div>
  );
}