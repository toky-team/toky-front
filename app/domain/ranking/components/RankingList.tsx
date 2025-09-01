import { tv } from "tailwind-variants";
import useIntersect from "@/common/hooks/useIntersect";
import Loader from "@/common/components/Loader";
import RankingItem from "./RankingItem";
import type { RankingItemData } from "../types";

interface RankingListProps {
  items: RankingItemData[];
  scoreUnit: string;
  isLoading: boolean;
  hasNextPage: boolean;
  onLoadMore: () => void;
}

const { container } = tv({
  slots: {
    container: 'flex flex-col gap-3',
  },
})();

const RankingList = ({ items, scoreUnit, isLoading, hasNextPage, onLoadMore }: RankingListProps) => {
  const fetchNextRef = useIntersect(() => {
    if (hasNextPage && !isLoading) {
      onLoadMore();
    }
  });

  return (
    <div className={container()}>
      {items.map((item, index) => (
        <RankingItem
          key={item.userId}
          item={item}
          index={index}
          scoreUnit={scoreUnit}
        />
      ))}
      
      <Loader 
        hasNextPage={hasNextPage}
        isFetchingNextPage={isLoading}
        fetchNextRef={fetchNextRef}
      />
    </div>
  );
};

export default RankingList;
