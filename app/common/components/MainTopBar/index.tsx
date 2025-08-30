import { Link } from 'react-router';

import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import Icon from '@/lib/assets/icons';
import TicketInfo from '@/common/components/TicketInfo';
import LoginButton from '@/domain/home/components/LoginButton';

import * as s from './style.css';
import { useState } from 'react';
import SideBar from '@/common/components/SideBar';

const MainTopBar = () => {
  const { data: authCheck, isLoading } = useGetAuthCheck();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isLogin = authCheck?.isSignup || false;

  return (
    <div className={s.Container}>
      <Link to="/">
        <Icon.TokyLogo />
      </Link>
      <div className={s.LeftArea}>
        {!isLoading && (isLogin ? <TicketInfo /> : <LoginButton />)}
        <button onClick={() => setIsSideBarOpen(true)}>
          <Icon.Hamburger />
        </button>
      </div>
      {isSideBarOpen && <SideBar onClose={() => setIsSideBarOpen(false)} />}
    </div>
  );
};

export default MainTopBar;
