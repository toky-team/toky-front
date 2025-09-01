import { tv, type VariantProps } from "tailwind-variants";
import { useGetActivityRank } from "@/common/apis/useGetActivityRank";
import { useGetMyActivityRank } from "@/common/apis/useGetMyActivityRank";
import { useGetBetHitRank } from "@/common/apis/useGetBetHitRank";
import { useGetMyBetHitRank } from "@/common/apis/useGetMyBetHitRank";

type RankingType = 'activity' | 'betRate';

const shortRankChartStyle = tv({
  slots: {
    root: 'flex flex-col w-full p-5 bg-[#1E1E1E] rounded-[10px]',
    itemContainer: 'flex flex-row items-center justify-between',
    username: 'text-base text-white-87 font-bold',
    hitRate: 'text-xl text-white-87 font-medium',
    rank: 'w-14 text-sm text-white-87 text-center',
    university: 'text-[13px] font-normal',
  },
  variants: {
    digits: {
      '1': {
        rank: 'text-[24px]',
      },
      '2': {
        rank: 'text-[22px]',
      },
      '3': {
        rank: 'text-[20px]',
      },
      '4': {
        rank: 'text-[18px]',
      },
      '5': {
        rank: 'text-[16px]',
      },
      'more': {
        rank: 'text-[16px]',
      },
    },
  },
});

const getDigitVariant = (rank: number | null | undefined): "1" | "2" | "3" | "4" | "5" | "more" => {
  if (!rank) return "1";
  const digits = rank.toString().length;
  if (digits <= 5) return digits.toString() as "1" | "2" | "3" | "4" | "5";
  return "more";
};

interface ShortRankChartProps {
  type?: RankingType;
}

const ShortRankChart = ({ type = 'activity' }: ShortRankChartProps) => {
  // API 호출
  const { data: activityRankData } = useGetActivityRank(3);
  const { data: myActivityRankData } = useGetMyActivityRank();
  const { data: betHitRankData } = useGetBetHitRank(3);
  const { data: myBetHitRankData } = useGetMyBetHitRank();

  // 타입에 따른 데이터와 단위 설정
  const rankData = type === 'activity' ? activityRankData : betHitRankData;
  const myRankData = type === 'activity' ? myActivityRankData : myBetHitRankData;
  const scoreUnit = type === 'activity' ? '점' : '%';

  const renderRankItem = (item: any, isMyRank = false) => {
    const { itemContainer, username, hitRate, rank, university } = shortRankChartStyle({
      digits: getDigitVariant(item.rank),
    });

    return (
      <div className={itemContainer()} key={item.userId}>
        <div className="flex flex-row items-center gap-3">
          <div className={rank()}>
            <span>{item.rank || '-'}</span>
          </div>
          <div className="flex flex-col">
            <div className={`${university()} ${isMyRank
              ? 'text-white-87'
              : item.university.includes('연세대학교')
                ? 'text-light-blue'
                : 'text-light-red'
              }`}>
              <span>{isMyRank ? '내 랭킹' : item.university}</span>
            </div>
            <div className={username()}>
              <span>{item.username}</span>
            </div>
          </div>
        </div>
        <div className={hitRate()}>
          <span>{(item.hitRate || item.score)}{scoreUnit}</span>
        </div>
      </div>
    );
  };

  const { root } = shortRankChartStyle();

  // 데이터 없는 경우 처리
  if (!myRankData && !rankData?.items?.length) {
    return (
      <div className={root()}>
        <div className="flex items-center justify-center py-8">
          <span className="text-white-54 text-sm">랭킹 데이터를 불러오는 중...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={root()}>
      {myRankData && renderRankItem(myRankData, true)}
      {myRankData && rankData?.items?.length && (
        <div className="w-full h-px bg-white/15 my-3"></div>
      )}
      <div className="flex flex-col gap-3">
        {rankData?.items?.map((item) => renderRankItem(item, false))}
      </div>
    </div>
  );
};

export default ShortRankChart;