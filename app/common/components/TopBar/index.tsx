import Icon from '@/lib/assets/icons';
import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  color?: '87' | 'd9';
  hasHamburger?: boolean;
}
const TopBar = ({ hasHamburger = false, color = '87', children }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={s.Container}>
      <button onClick={() => navigate(-1)} className={s.BackButton({ color })}>
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
