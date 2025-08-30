import useGetTicketCount from '@/common/apis/useGetTicketCount';
import Icon from '@/lib/assets/icons';
import { Link } from 'react-router';

const TicketInfo = () => {
  const { data: ticketCount } = useGetTicketCount();

  return (
    <Link
      to="/tickets"
      className="text-white-87 flex flex-row items-center gap-[0.25rem] rounded-full bg-[rgba(255,233,64,0.10)] px-[0.5rem] py-[0.125rem] text-[0.8125rem] font-medium"
    >
      <Icon.Ticket />
      {ticketCount ?? '- '}장
    </Link>
  );
};
export default TicketInfo;
