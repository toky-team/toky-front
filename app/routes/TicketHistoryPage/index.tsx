import TopBar from '@/common/components/TopBar';
import * as s from './style.css';
import { useGetTicketHistory } from '@/domain/ticket/apis/useGetTicketHistory';
import Loader from '@/common/components/Loader';
import useIntersect from '@/common/hooks/useIntersect';

const TicketHistoryPage = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } = useGetTicketHistory(undefined);

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <div className={s.Container}>
      <div className={s.Header}>
        <TopBar hasHamburger>
          <h1 className={s.Title}>응모권 획득/사용 내역</h1>
        </TopBar>
      </div>
      <div className={s.List}>
        {data?.map((item) => (
          <div key={item.id} className={s.Item}>
            <div className={s.LeftSide}>
              <h3 className={s.ItemTitle}>{item.reason}</h3>
              <p>{item.createdAt}</p>
            </div>
            <div className={s.RightSide}>
              <p>{item.changeAmount > 0 ? `+${item.changeAmount}` : item.changeAmount}장</p>
              <p className={s.ResultAmount}>{item.resultAmount}장</p>
            </div>
          </div>
        ))}
        <Loader hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} fetchNextRef={fetchNextRef} />
      </div>
    </div>
  );
};
export default TicketHistoryPage;
