import { useState } from "react";
import MainTopBar from "@/common/components/MainTopBar";
import NavBar from "@/common/components/NavBar";
import { useActivityRankPagination } from "@/common/apis/useActivityRankPagination";
import { useBetHitRankPagination } from "@/common/apis/useBetHitRankPagination";
import { useGetMyActivityRank } from "@/common/apis/useGetMyActivityRank";
import { useGetMyBetHitRank } from "@/common/apis/useGetMyBetHitRank";
import RankingTabs from "@/domain/ranking/components/RankingTabs";
import MyRankCard from "@/domain/ranking/components/MyRankCard";
import RankingList from "@/domain/ranking/components/RankingList";
import type { RankingType, RankingItemData } from "@/domain/ranking/types";

const Ranking = () => {
  const [activeTab, setActiveTab] = useState<RankingType>('activity');

  // API 호출
  const { data: activityRankData, fetchNextPage: fetchNextActivityPage, hasNextPage: hasNextActivityPage, isLoading: isActivityLoading } = useActivityRankPagination(1);
  const { data: betHitRankData, fetchNextPage: fetchNextBetHitPage, hasNextPage: hasNextBetHitPage, isLoading: isBetHitLoading } = useBetHitRankPagination(20);
  const { data: myActivityRank } = useGetMyActivityRank();
  const { data: myBetHitRank } = useGetMyBetHitRank();

  // 현재 탭에 따른 데이터
  const currentRankData = activeTab === 'activity' ? activityRankData : betHitRankData;
  const currentMyRank = activeTab === 'activity' ? myActivityRank : myBetHitRank;
  const scoreUnit = activeTab === 'activity' ? '점' : '%';
  const isLoading = activeTab === 'activity' ? isActivityLoading : isBetHitLoading;
  const hasNextPage = activeTab === 'activity' ? hasNextActivityPage : hasNextBetHitPage;
  const fetchNextPage = activeTab === 'activity' ? fetchNextActivityPage : fetchNextBetHitPage;

  // 모든 랭킹 아이템들
  const allRankItems: RankingItemData[] = currentRankData?.pages.flatMap(page => page.items as RankingItemData[]) ?? [];

  const handleShare = () => {
    // 공유 로직 구현
    console.log('랭킹 공유하기');
  };

  return (
    <>
      <MainTopBar />
      <NavBar />

      <div className="flex flex-col px-5 py-6 gap-4">
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
    </>
  );
};

export default Ranking;