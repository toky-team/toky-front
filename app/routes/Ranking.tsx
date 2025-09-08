import { useState, useEffect } from 'react';
import MainTopBar from '@/common/components/MainTopBar';
import NavBar from '@/common/components/NavBar';
import { useActivityRankPagination } from '@/common/apis/useActivityRankPagination';
import { useBetHitRankPagination } from '@/common/apis/useBetHitRankPagination';
import { useGetMyActivityRank } from '@/common/apis/useGetMyActivityRank';
import { useGetMyBetHitRank } from '@/common/apis/useGetMyBetHitRank';
import RankingTabs from '@/domain/ranking/components/RankingTabs';
import MyRankCard from '@/domain/ranking/components/MyRankCard';
import RankingList from '@/domain/ranking/components/RankingList';
import type { RankingType, RankingItemData } from '@/domain/ranking/types';
import ScrollTop from '@/lib/assets/icons/ScrollTop';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState<RankingType>('activity');
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // API 호출
  const {
    data: activityRankData,
    fetchNextPage: fetchNextActivityPage,
    hasNextPage: hasNextActivityPage,
    isLoading: isActivityLoading,
  } = useActivityRankPagination(20);
  const {
    data: betHitRankData,
    fetchNextPage: fetchNextBetHitPage,
    hasNextPage: hasNextBetHitPage,
    isLoading: isBetHitLoading,
  } = useBetHitRankPagination(20);
  const { data: myActivityRank } = useGetMyActivityRank();
  const { data: myBetHitRank } = useGetMyBetHitRank();

  // 현재 탭에 따른 데이터
  const currentRankData = activeTab === 'activity' ? activityRankData : betHitRankData;
  const currentMyRank = activeTab === 'activity' ? myActivityRank : myBetHitRank;
  const scoreUnit = activeTab === 'activity' ? '점' : '%';
  const isLoading = activeTab === 'activity' ? isActivityLoading : isBetHitLoading;
  const hasNextPage = activeTab === 'activity' ? hasNextActivityPage : hasNextBetHitPage;
  const fetchNextPage = activeTab === 'activity' ? fetchNextActivityPage : fetchNextBetHitPage;

  const allRankItems: RankingItemData[] =
    currentRankData?.pages.flatMap((page) => page.items as RankingItemData[]) ?? [];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTopButton(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleShare = () => {
    console.log('랭킹 공유하기');
  };

  return (
    <>
      <MainTopBar />
      <NavBar />

      <div className="flex flex-col gap-4 px-5 py-6">
        <MyRankCard
          myRank={currentMyRank as RankingItemData | null}
          scoreUnit={scoreUnit}
          onShare={handleShare}
          activeTab={activeTab}
        />
        <RankingTabs activeTab={activeTab} onTabChange={setActiveTab}>
          <div className="flex flex-col gap-6">
            <RankingList
              items={allRankItems}
              scoreUnit={scoreUnit}
              isLoading={isLoading}
              hasNextPage={hasNextPage}
              onLoadMore={fetchNextPage}
            />
          </div>
        </RankingTabs>
      </div>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#333333] shadow-[0_4px_10px_0_rgba(18,18,18,0.15)] transition-all duration-300 hover:shadow-xl"
          aria-label="맨 위로 가기"
        >
          <ScrollTop />
        </button>
      )}
    </>
  );
};

export default Ranking;
