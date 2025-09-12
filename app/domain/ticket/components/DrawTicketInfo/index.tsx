import { Link } from 'react-router';
import * as s from './style.css';
import { ChevronRight } from 'lucide-react';
import useGetTicketCount from '@/common/apis/useGetTicketCount';
import Icon from '@/lib/assets/icons';
import { useGetGift } from '@/domain/ticket/apis/useGetGift';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';

const DrawTicketInfo = () => {
  const { data: ticketCount } = useGetTicketCount();
  const { data: giftList } = useGetGift();
  const { data: authCheck } = useGetAuthCheck();
  const isSignup = authCheck?.isSignup || false;

  const sortedGiftList = [...(giftList || [])].sort((a, b) => b.drawCount - a.drawCount);

  return (
    <div className={s.Container}>
      <div className={s.TicketInfo}>
        <Link to="/tickets" className={s.TicketHistory}>
          내 응모권 내역 <ChevronRight size={18} />
        </Link>
        <div className={s.TicketCount}>
          <Icon.Ticket width="2.25rem" height="2.25rem" /> {ticketCount ?? 0}장
        </div>
      </div>
      <div className={s.DrawHistory}>
        <h2>내 응모 현황</h2>
        {isSignup ? (
          <div className={s.ItemsList}>
            {sortedGiftList?.map((gift) => (
              <div key={gift.id} className={s.Item}>
                <h3 className={s.ItemName}>{gift.alias}</h3>
                <p>{gift.drawCountByUser}장</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={s.SignupText}>로그인 후 확인해주세요.</div>
        )}
      </div>
    </div>
  );
};
export default DrawTicketInfo;
