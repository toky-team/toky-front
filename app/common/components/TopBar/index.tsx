import Icon from '@/lib/assets/icons';
import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';
import * as s from './style.css';
import { useState } from 'react';
import SideBar from '@/common/components/SideBar';

interface Props extends PropsWithChildren {
  color?: '87' | 'd9';
  hasHamburger?: boolean;
  handlePrevButton?: () => void;
}
const TopBar = ({ hasHamburger = false, color = '87', children, handlePrevButton }: Props) => {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleBackButton = () => {
    if (handlePrevButton) {
      handlePrevButton();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={s.Container}>
      <button onClick={handleBackButton} className={s.BackButton({ color })}>
        <Icon.ArrowBack />
      </button>
      {children}
      <span className={s.RightArea}>
        {hasHamburger && (
          <button
            onClick={() => {
              setIsSideBarOpen(true);
            }}
          >
            <Icon.Hamburger />
          </button>
        )}
      </span>
      {isSideBarOpen && <SideBar onClose={() => setIsSideBarOpen(false)} />}
    </div>
  );
};
export default TopBar;
