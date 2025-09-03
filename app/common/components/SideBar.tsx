import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import { useLocation, useNavigate } from 'react-router';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import { useGetUserInfo } from '@/common/apis/useGetUserInfo';
import useGetTicketCount from '@/common/apis/useGetTicketCount';
import { useGetInviteCode } from '@/common/apis/useGetInviteCode';
import useLogout from '../apis/useLogout';
import { useToast } from '@/common/hooks/useToast';
import { CopyIcon } from 'lucide-react';
import LoginButton from '@/domain/home/components/LoginButton';
import Icon from '@/lib/assets/icons';
import { motion } from 'motion/react';

const sideBarVariants = tv({
  slots: {
    root: 'fixed inset-0 z-50 flex justify-end',
    scrim: 'absolute inset-0 bg-black/60',
    drawer:
      'absolute right-0 top-0 w-[80vw] h-full bg-[#232323] px-5 pt-10 transition-transform duration-300 overflow-y-auto',
    header: 'flex items-center gap-4 px-1',
    avatar:
      'h-14 w-14 shrink-0 rounded-full bg-white-disabled-12 flex items-center justify-center text-white/60 text-lg',
    userBlock: 'flex flex-col gap-[2px]',
    userName: 'text-white text-xl font-bold',
    university: 'text-xs font-normal',
    ticketBox: 'mt-5 rounded-[10px] bg-[#333333] p-4 flex items-center justify-between',
    ticketText: 'text-white/60 text-xs font-normal',
    ticketCount: 'text-white/87 text-lg font-medium',
    inviteBtn:
      'inline-flex items-center justify-center rounded-full bg-white-87 text-[#121212] h-[34px] px-4 text-sm font-bold',
    guestCard: 'mt-5 rounded-[10px] bg-[#333333] p-4 flex items-center justify-between',
    nav: 'mt-6 flex flex-col gap-8 pb-8',
    navItem: 'relative w-max text-left text-white-disabled-60 text-base font-medium',
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
  const { data: inviteCode } = useGetInviteCode();
  const { openToast } = useToast();

  const currentPath = useLocation().pathname;

  // 대학교명에 따른 variant 결정
  const getUniversityVariant = (universityName: string | undefined) => {
    if (universityName === '고려대학교') return 'korea';
    if (universityName === '연세대학교') return 'yonsei';
    return 'korea'; // 기본값
  };

  const {
    root,
    scrim,
    drawer,
    header,
    userBlock,
    userName,
    university,
    ticketBox,
    ticketText,
    ticketCount: ticketCountCls,
    inviteBtn,
    guestCard,
    nav,
  } = sideBarVariants({ 
    open: isVisible,
    university: getUniversityVariant(userInfo?.university)
  });

  useEffect(() => {
    // 컴포넌트가 마운트된 후 애니메이션 시작
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 사이드바가 열리면 body 스크롤 방지
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      // 컴포넌트가 언마운트되거나 사이드바가 닫히면 스크롤 복구
      document.body.style.overflow = '';
    };
  }, [isVisible]);

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
    const text = import.meta.env.VITE_CLIENT_URL + '/?referer=' + inviteCode;
    await navigator.clipboard.writeText(text);
    openToast({
      message: '초대 링크가 복사되었습니다.',
    });
  };

  const isLoggedIn = Boolean(auth?.isSignup);

  return (
    <div className={root()}>
      <motion.div
        className={scrim()}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
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
              <div className="flex flex-col gap-1">
                <span className={ticketText()}>내 응모권</span>
                <div className="flex items-center gap-1">
                  <Icon.Ticket />
                  <span className={ticketCountCls()}>{ticketCount ?? 0}장</span>
                </div>
              </div>
              <button onClick={handleCopyInvite} className={inviteBtn()}>
                <CopyIcon className="mr-1 h-[18px] w-[18px]" />내 초대링크
              </button>
            </div>
          </>
        ) : (
          <div className={guestCard()}>
            <div className="text-white">
              <div className="text-sm text-white/80">10초만에 로그인하고</div>
              <div className="text-sm text-white/80">승부예측 참여하세요</div>
            </div>
            <LoginButton size="lg" />
          </div>
        )}

        <nav className={nav()}>
          {navItems
            .filter((item) => !item.onlyLoggedIn || isLoggedIn)
            .map((item) => {
              const isActive = currentPath === item.path;
              const variantStyles = sideBarVariants({
                open: isVisible,
                active: isActive,
              });
              return (
                <button key={item.path} className={variantStyles.navItem()} onClick={() => handleNavigate(item.path)}>
                  {item.label}
                </button>
              );
            })}
            <button className={sideBarVariants({ active: false }).navItem()} onClick={() => window.open("https://www.instagram.com/official.toky/")}>
              문의하기
            </button>
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
