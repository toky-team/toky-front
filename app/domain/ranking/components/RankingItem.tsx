import { tv } from "tailwind-variants";
import type { RankingItemData } from "../types";

interface RankingItemProps {
  item: RankingItemData;
  index: number;
  scoreUnit: string;
}

const { itemContainer, userInfo, username, hitRate, rank, university, rankContainer } = tv({
  slots: {
    itemContainer: 'flex flex-row items-center justify-between',
    rankContainer: 'flex flex-row items-center gap-3',
    userInfo: 'flex flex-col',
    username: 'text-base text-white-87 font-bold',
    hitRate: 'text-xl text-white-87 font-medium',
    rank: 'w-14 text-sm text-white-87 text-center',
    university: 'text-[13px] font-normal',
  },
})();

const getUniversityClass = (university: string) => {
  if (university.includes('고려대학교')) return 'text-light-red text-[13px] font-normal';
  if (university.includes('연세대학교')) return 'text-light-blue text-[13px] font-normal';
  return 'text-white-54 text-[13px] font-normal';
};

const getRankClass = (rank: number) => {
  if (rank.toString().length === 1) return 'text-[24px]';
  if (rank.toString().length === 2) return 'text-[22px]';
  if (rank.toString().length === 3) return 'text-[20px]';
  if (rank.toString().length === 4) return 'text-[18px]';
  if (rank.toString().length === 5) return 'text-[16px]';
  return 'text-[16px]';
};

const RankingItem = ({ item, index, scoreUnit }: RankingItemProps) => {
  const rankClass = getRankClass(item.rank);

  return (
    <div className={itemContainer()}>
      <div className={rankContainer()}>
        <div className={rank() + ' ' + rankClass}>
          {item.rank}
        </div>
        <div className={userInfo()}>
          <div className={getUniversityClass(item.university)}>
            {item.university}
          </div>
          <div className={username()}>
            {item.username}
          </div>
        </div>
      </div>
      <div className={hitRate()}>
        {item.hitRate !== undefined && item.hitRate !== null
          ? `${item.hitRate}${scoreUnit}`
          : `${item.score}${scoreUnit}`
        }
      </div>
    </div>
  );
};

export default RankingItem;
