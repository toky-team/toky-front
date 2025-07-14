import Icon from '@/lib/assets/icons';
import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

interface Props extends PropsWithChildren {
  hasHamburger?: boolean;
}
const TopBar = ({ hasHamburger = false, children }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[3.25rem] w-full items-center justify-between px-[1.25rem] py-[0.8125rem]">
      <button onClick={() => navigate(-1)}>
        <Icon.ArrowBack />
      </button>
      {children}
      {/* TODO: 사이드바 메뉴 연결 */}
      <span className="flex h-[26px] w-[26px] items-center justify-center">
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
