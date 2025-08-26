import { useEffect, useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useLocation, useNavigate } from 'react-router';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import { useGetUserInfo } from '@/common/apis/useGetUserInfo';
import useGetTicketCount from '@/common/apis/useGetTicketCount';
import useLogout from '../apis/useLogout';

const sideBarVariants = tv({
  slots: {
    root: 'fixed inset-0 z-50 flex justify-end',
    scrim: 'absolute inset-0 bg-black/60 backdrop-blur-sm',
    drawer:
      'absolute right-0 top-0 w-[80vw] h-full bg-[#232323] px-4 pt-16 transition-transform duration-300 overflow-y-auto',
    header: 'flex items-center gap-4 px-1',
    avatar:
      'h-14 w-14 shrink-0 rounded-full bg-white-disabled-12 flex items-center justify-center text-white/60 text-lg',
    userBlock: 'flex flex-col gap-1',
    userName: 'text-white text-xl font-semibold leading-tight',
    university: 'text-red-400 text-sm',
    ticketBox:
      'mt-5 rounded-2xl bg-[#333333] p-4 flex items-center justify-between',
    ticketText: 'text-white-disabled-60 text-sm',
    ticketCount: 'text-white text-xl font-semibold',
    inviteBtn:
      'ml-2 inline-flex items-center justify-center rounded-xl bg-white text-black h-10 px-3 text-sm font-semibold',
    guestCard:
      'mx-1 mb-5 rounded-2xl bg-white-disabled-12 p-4 flex items-center justify-between',
    loginBtn:
      'h-10 rounded-xl bg-primary px-5 text-sm font-semibold text-white',
    nav: 'mt-6 flex flex-col gap-8',
    navItem:
      'relative w-max text-left text-white-disabled-60 text-base font-medium',
  },
  variants: {
    open: {
      true: { drawer: 'translate-x-0' },
      false: { drawer: 'translate-x-full' },
    },
    active: {
      true: {
        navItem: 'text-white font-bold border-b-2 border-white pb-[2px]',
      },
      false: {
        navItem: 'text-white-disabled-60 font-medium border-b-2 border-transparent',
      },
    },
    university: {
      korea: { university: 'text-light-red' },
      yonsei: { university: 'text-light-blue' },
    },
  },
  defaultVariants: { 
    open: false, 
    university: 'korea',
    active: false,
  },
});

interface NavItem {
  label: string;
  path: string;
  onlyLoggedIn: boolean;
}

const navItems: NavItem[] = [
  { label: '홈', path: '/', onlyLoggedIn: false },
  { label: '승부예측', path: '/prediction', onlyLoggedIn: false },
  { label: '전력분석', path: '/record', onlyLoggedIn: false },
  { label: '선수', path: '/player', onlyLoggedIn: false },
  { label: '경품응모', path: '/application', onlyLoggedIn: false },
  { label: '랭킹', path: '/ranking', onlyLoggedIn: true },
  { label: '출석게임', path: '/attendance', onlyLoggedIn: false },
  { label: '응모권 내역', path: '/tickets', onlyLoggedIn: true },
  { label: '회원정보 관리', path: '/account', onlyLoggedIn: true },
  { label: '문의하기', path: '/support', onlyLoggedIn: false },
];

interface SideBarProps {
  onClose: () => void;
}

const SideBar = ({ onClose }: SideBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { data: auth } = useGetAuthCheck();
  const { data: userInfo } = useGetUserInfo();
  const { data: ticketCount } = useGetTicketCount();
  const logout = useLogout();

  const currentPath = useLocation().pathname;

  const { root, scrim, drawer, header, userBlock, userName, university, ticketBox, ticketText, ticketCount: ticketCountCls, inviteBtn, guestCard, loginBtn, nav } = sideBarVariants({ open: isVisible });

  useEffect(() => {
    // 컴포넌트가 마운트된 후 애니메이션 시작
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // 애니메이션 완료 후 언마운트
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSettled: () => {
        navigate('/');
        handleClose();
      },
    });
  };

  const handleCopyInvite = async () => {
    // TODO: 초대링크 복사 기능 추가
  };

  const isLoggedIn = Boolean(auth?.isLogin);

  return (
    <div className={root()}>
      <div className={scrim()} onClick={handleClose} />
      <div className={drawer()}>
        {isLoggedIn ? (
          <>
            <div className={header()}>
              <div className={userBlock()}>
                <div className={university()}>{userInfo?.university ?? ''}</div>
                <div className={userName()}>{userInfo?.name ?? ''}</div>
              </div>
            </div>
            <div className={ticketBox()}>
              <div className="flex flex-col">
                <span className={ticketText()}>내 응모권</span>
                <span className={ticketCountCls()}>{ticketCount ?? 0}장</span>
              </div>
              <button onClick={handleCopyInvite} className={inviteBtn()}>
                내 초대링크
              </button>
            </div>
          </>
        ) : (
          <div className={guestCard()}>
            <div className="text-white">
              <div className="text-sm text-white/80">10초만에 로그인하고</div>
              <div className="text-sm text-white/80">승부예측 참여하세요</div>
            </div>
            <button className={loginBtn()} onClick={() => handleNavigate('/login')}>
              로그인
            </button>
          </div>
        )}

        <nav className={nav()}>
          {navItems.filter((item) => !item.onlyLoggedIn || isLoggedIn).map((item) => {
            const isActive = currentPath === item.path;
            const variantStyles = sideBarVariants({ 
              open: isVisible, 
              active: isActive 
            });
            return (
              <button
                key={item.path}
                className={variantStyles.navItem()}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </button>
            );
          })}
          {isLoggedIn && (
            <button className={sideBarVariants({ active: false }).navItem()} onClick={handleLogout}>
              로그아웃
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;