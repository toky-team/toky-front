import { tv } from "tailwind-variants";
import type { RankingItemData, RankingType } from "../types";
import { useGetUserSummary } from "@/common/apis/useGetUserSummary";
import { useGetIsAnswerSet } from "@/common/apis/useGetIsAnswerSet";
import Rank10 from "@/lib/assets/images/rank_10.webp";
import Rank20 from "@/lib/assets/images/rank_20.webp";
import Rank30 from "@/lib/assets/images/rank_30.webp";
import RankDefault from "@/lib/assets/images/rank_default.webp";
import Medal from "@/lib/assets/icons/Medal";
import ActivityRankRectangle from "@/lib/assets/icons/ActivityRankRectangle";

interface MyRankCardProps {
  myRank: RankingItemData | null;
  scoreUnit: string;
  onShare: () => void;
  activeTab: RankingType;
}

const { container, descriptionContainer, leftContainer, descriptionIcon, descriptionText, imageContainer, myRankScore } = tv({
  slots: {
    container: 'w-full flex pt-3 pb-1 pr-1 pl-1 bg-[#333333] flex-col gap-2 rounded-[16px]',
    descriptionContainer: 'w-full h-4 px-3 flex flex-row justify-between items-center',
    leftContainer: 'flex flex-row items-center gap-1',
    descriptionIcon: 'w-3 h-3',
    descriptionText: 'text-[13px] text-white/60 font-bold',
    imageContainer: 'relative w-full h-53 overflow-hidden rounded-[16px] bg-gradient-to-r from-[#D6C692] to-[#635138]',
    myRankScore: 'text-[13px] text-[#FFEE7F] font-medium',
  },
})();

const MyRankCard = ({ myRank, scoreUnit, onShare, activeTab }: MyRankCardProps) => {
  if (!myRank) return null;
  const { data: userSummary } = useGetUserSummary();
  const percentage = (myRank.rank / (userSummary?.totalUsers ?? 0)) * 100;

  const getRankImage = (percentage: number) => {
    if (percentage <= 10) return Rank10;
    if (percentage <= 20) return Rank20;
    if (percentage <= 30) return Rank30;
    return RankDefault;
  };

  return (
    <div className={container()}>
      <div className={descriptionContainer()}>
        <div className={leftContainer()}>
          <div className={descriptionIcon()}>
            <Medal />
          </div>
          <div className={descriptionText()}>
            {myRank.username}님의 랭킹
          </div>
        </div>
        <div className={myRankScore()}>
          상위 {percentage.toFixed(2)}%
        </div>
      </div>
      <div className={imageContainer()}>
        <img src={getRankImage(percentage)} alt="rank" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0">
          <ActivityRankRectangle />
          <div className="absolute bottom-12 left-4 z-10 text-[14px] text-white-87 font-medium">
            {activeTab === 'activity' ? '활동' : '적중'}랭킹
          </div>
          <div className="absolute bottom-[10px] left-4 z-10">
            <span className="text-[28px] text-white font-bold font-giants-bold mr-1">
              {myRank.rank}
            </span>
            <span className="text-[13px] text-white/60 font-bold">
              등
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRankCard;
