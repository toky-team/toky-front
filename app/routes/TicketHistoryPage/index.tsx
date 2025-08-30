import TopBar from '@/common/components/TopBar';
import * as s from './style.css';

const TicketHistoryPage = () => {
  return (
    <div className={s.Container}>
      <TopBar hasHamburger>
        <h1 className={s.Title}>응모권 획득/사용 내역</h1>
      </TopBar>
    </div>
  );
};
export default TicketHistoryPage;
