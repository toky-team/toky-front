import { Link } from 'react-router';

import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import Icon from '@/libs/assets/icons';
import KakaoLogin from '@/common/components/KakaoLogin';
import TicketInfo from '@/common/components/TicketInfo';

const MainTopBar = () => {
  const { data: isLoggedIn, isLoading } = useGetAuthCheck();

  return (
    <div className="bg-bg-0 flex h-[2.875rem] w-full flex-row items-center justify-between px-5 py-2.5">
      <Link to="/">
        <Icon.TokyLogo />
      </Link>
      <div className="flex shrink-0 flex-row items-center gap-3">
        {!isLoading && (isLoggedIn ? <TicketInfo /> : <KakaoLogin />)}
        {/* TODO: Sidebar 구현 */}
      </div>
    </div>
  );
};
export default MainTopBar;
