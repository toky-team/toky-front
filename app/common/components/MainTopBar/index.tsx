import { Link } from 'react-router';

import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import Icon from '@/lib/assets/icons';
import TicketInfo from '@/common/components/TicketInfo';
import LoginButton from '@/domain/home/components/LoginButton';

import * as s from './style.css';
import { useState } from 'react';
import SideBar from '@/common/components/SideBar';
import { AnimatePresence } from 'motion/react';

const MainTopBar = () => {
  const { data: authCheck, isSuccess } = useGetAuthCheck();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isSignup = isSuccess && authCheck.isSignup;

  return (
    <div className={s.Container}>
      <Link to="/">
        <Icon.TokyLogo />
      </Link>
      <div className={s.LeftArea}>
        {isSignup ? <TicketInfo /> : <LoginButton />}
        <button onClick={() => setIsSideBarOpen(true)}>
          <Icon.Hamburger />
        </button>
      </div>
      <AnimatePresence>{isSideBarOpen && <SideBar onClose={() => setIsSideBarOpen(false)} />}</AnimatePresence>
    </div>
  );
};

export default MainTopBar;
