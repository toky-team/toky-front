import { Link } from 'react-router';

import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import Icon from '@/lib/assets/icons';
import TicketInfo from '@/common/components/TicketInfo';
import LoginButton from '@/domain/home/components/LoginButton';

import * as s from './style.css';

const MainTopBar = () => {
  const { data: isLoggedIn, isLoading } = useGetAuthCheck();

  return (
    <div className={s.Container}>
      <Link to="/">
        <Icon.TokyLogo />
      </Link>
      <div className={s.LeftArea}>
        {!isLoading && (isLoggedIn ? <TicketInfo /> : <LoginButton />)}
        {/* TODO: Sidebar 구현 */}
        <button>
          <Icon.Hamburger />
        </button>
      </div>
    </div>
  );
};
export default MainTopBar;
