import Icon from '@/lib/assets/icons';
import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  color?: '87' | 'd9';
  hasHamburger?: boolean;
  handlePrevButton?: () => void;
}
const TopBar = ({ hasHamburger = false, color = '87', children, handlePrevButton }: Props) => {
  const navigate = useNavigate();

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
      {/* TODO: 사이드바 메뉴 연결 */}
      <span className={s.RightArea}>
        {hasHamburger && (
          <button>
            <Icon.Hamburger />
          </button>
        )}
      </span>
    </div>
  );
};
export default TopBar;
