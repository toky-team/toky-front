import { tv, type VariantProps } from "tailwind-variants";
import { useGetBetHitRank } from "@/common/apis/useGetBetHitRank";
import { useGetMyBetHitRank } from "@/common/apis/useGetMyBetHitRank";

const shortRankChartStyle = tv({
  slots: {
    container: 'w-full h-[350px] p-5 bg-[#1E1E1E] rounded-[10px]',
    username: 'text-sm text-gray-500',
    hitRate: 'text-sm text-gray-500',
    rank: 'text-sm text-gray-500',
    university: 'text-sm text-gray-500',
  },
});

const ShortRankChart = () => {
  const { data: betHitRank } = useGetBetHitRank('0', 3);
  const { data: myBetHitRank } = useGetMyBetHitRank();

  const { container, username, hitRate, rank, university } = shortRankChartStyle();

  return (
    <div className={container()}>
      <div className={username()}>
        <span>{myBetHitRank?.username}</span>
      </div>
      <div className={hitRate()}>
        <span>{myBetHitRank?.hitRate}</span>
      </div>
      <div className={rank()}>
        <span>{myBetHitRank?.rank}</span>
      </div>
      <div className={university()}>
        <span>{myBetHitRank?.university}</span>
      </div>
      {betHitRank?.map((item) => (
        <div className={container()} key={item.userId}>
          <div className={username()}>
            <span>{item.username}</span>
          </div>
          <div className={hitRate()}>
            <span>{item.hitRate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortRankChart;