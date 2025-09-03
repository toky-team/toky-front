<<<<<<< HEAD
import { tv } from 'tailwind-variants';
import Icon from '@/lib/assets/icons';
import type { PlayerInterface } from '@/lib/types/player';
import { useGetMatchRecordByPlayer } from '@/common/apis/useGetMatchRecordByPlayer';
import SideBar from '@/common/components/SideBar';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

const overlayVariants = tv({
  slots: {
    container:
      'fixed inset-0 z-50 bg-[#121212] w-full h-full overflow-auto transform transition-all duration-300 pb-20',
    topBar:
      'absolute top-0 left-0 right-0 z-20 flex items-center justify-between h-14 px-5 py-3 bg-gradient-to-b from-black/70 via-black/30 to-transparent',
    backButton: 'flex items-center justify-center w-6 h-6 text-white',
    hamburgerButton: 'flex items-center justify-center w-6 h-6 text-white',
    header: 'relative',
    imageContainer: 'relative h-[60vh]',
    playerImage: 'w-full h-full object-cover relative',
    backgroundNumber:
      'absolute inset-0 flex pb-20 items-center justify-center text-[300px] font-giants-bold pointer-events-none select-none',
    numberBadge: 'absolute bottom-5 right-5 text-[72px] font-giants-bold text-white z-20',
    playerInfoBg: 'absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121212]/0 to-[#121212]/80',
    playerInfo: 'absolute bottom-4 left-4 flex flex-col gap-1 z-10',
    playerName: 'text-white/80 text-[34px] font-normal [text-shadow:0_4px_40px_rgba(0,0,0,0.25)]',
    universityName: 'text-white/80 text-lg font-medium [text-shadow:0_4px_40px_rgba(0,0,0,0.25)]',
    content: 'p-6 space-y-6 pb-8',
    sectionTitle: 'text-base font-bold text-white mb-4',
    sectionCard: 'flex flex-col gap-3 bg-[#232323] rounded-[10px] p-4',
    infoRow: 'flex items-center',
    infoLabel: 'text-sm text-gray-300 font-medium w-20 flex-shrink-0',
    infoValue: 'text-base font-semibold text-white flex-1',
    careersSection: 'gap-3',
    careerItem: 'text-sm text-white',
    universityContainer: 'flex items-center gap-2',
    universityDepartment: 'text-white/60 text-base font-medium [text-shadow:0_4px_40px_rgba(0,0,0,0.25)]',
    statsHeader: 'flex flex-row items-center justify-between border-white/10 bg-[#202020] py-2 px-5',
    statItem: 'text-sm text-white font-medium text-center flex-1',
    leagueName: 'text-sm text-white font-medium flex-1',
    statsRow: 'flex flex-row items-center justify-between bg-[#2A2A2A] py-3 px-5',
    leagueStats: 'flex flex-row justify-between flex-1',
=======
import { tv } from "tailwind-variants";
import Icon from "@/lib/assets/icons";
import type { PlayerInterface } from "@/lib/types/player";
import { useGetMatchRecordByPlayer } from "@/common/apis/useGetMatchRecordByPlayer";
import SideBar from "@/common/components/SideBar";
import { useState, useEffect } from "react";
import { AnimatePresence } from 'motion/react'

const overlayVariants = tv({
  slots: {
    container: "fixed inset-0 z-50 bg-[#121212] w-full h-full overflow-auto transform transition-all duration-300 pb-20",
    topBar: "absolute top-0 left-0 right-0 z-20 flex items-center justify-between h-14 px-5 py-3 bg-gradient-to-b from-black/70 via-black/30 to-transparent",
    backButton: "flex items-center justify-center w-6 h-6 text-white",
    hamburgerButton: "flex items-center justify-center w-6 h-6 text-white",
    header: "relative",
    imageContainer: "relative h-[60vh]",
    playerImage: "w-full h-full object-cover relative",
    backgroundNumber: "absolute inset-0 flex pb-20 items-center justify-center text-[300px] font-giants-bold pointer-events-none select-none",
    numberBadge: "absolute bottom-5 right-5 text-[72px] font-giants-bold text-white z-20",
    playerInfoBg: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121212]/0 to-[#121212]/80",
    playerInfo: "absolute bottom-4 left-4 flex flex-col gap-1 z-10",
    playerName: "text-white text-[34px] font-nanum-square font-extrabold [text-shadow:0_4px_40px_rgba(0,0,0,0.25)]",
    universityName: "text-white text-lg [text-shadow:0_4px_40px_rgba(0,0,0,0.25)]",
    content: "p-6 space-y-6 pb-8",
    sectionTitle: "text-base font-bold text-white mb-4",
    sectionCard: "flex flex-col gap-3 bg-[#232323] rounded-[10px] p-4",
    infoRow: "flex items-center",
    infoLabel: "text-sm text-gray-300 font-medium w-20 flex-shrink-0",
    infoValue: "text-base font-semibold text-white flex-1",
    careersSection: "gap-3",
    careerItem: "text-sm text-white",
    universityContainer: "flex items-center gap-2",
    universityDepartment: "text-white/60 text-base font-medium [text-shadow:0_4px_40px_rgba(0,0,0,0.25)]",
    statsHeader: "flex flex-row items-center justify-between border-white/10 bg-[#202020] py-2 px-5",
    statItem: "text-sm text-white font-medium text-center flex-1",
    leagueName: "text-sm text-white font-medium flex-1",
    statsRow: "flex flex-row items-center justify-between bg-[#2A2A2A] py-3 px-5",
    leagueStats: "flex flex-row justify-between flex-1",
>>>>>>> bdf08f8 (feat: 뱃지, 선수이름 글꼴)
  },
  variants: {
    isOpen: {
      true: {
        container: 'translate-x-0 opacity-100',
      },
      false: {
        container: 'translate-x-full opacity-0 pointer-events-none',
      },
    },
    team: {
      korea: {
        imageContainer: 'bg-[#F3233C]/10',
        backgroundNumber: 'text-[#F3233C]/15',
      },
      yonsei: {
        imageContainer: 'bg-[#2948FF]/10',
        backgroundNumber: 'text-[#2948FF]/15',
      },
    },
  },
});

interface PlayerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  player: PlayerInterface;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
};

const PlayerOverlay = ({ isOpen, onClose, player }: PlayerOverlayProps) => {
  const team = player.university === '고려대학교' ? 'korea' : 'yonsei';
  const { data: matchRecordByPlayer } = useGetMatchRecordByPlayer(player.id);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const displayData = matchRecordByPlayer;

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const {
    container,
    topBar,
    backButton,
    hamburgerButton,
    header,
    imageContainer,
    playerImage,
    backgroundNumber,
    numberBadge,
    playerInfoBg,
    playerInfo,
    playerName,
    universityName,
    content,
    sectionTitle,
    sectionCard,
    infoRow,
    infoLabel,
    infoValue,
    careersSection,
    careerItem,
    universityContainer,
    universityDepartment,
    statsHeader,
    statItem,
    leagueName,
    statsRow,
    leagueStats,
  } = overlayVariants({ isOpen, team });

  return (
    <div className={container()}>
      {/* Top Navigation Bar */}
      <div className={topBar()}>
        <button className={backButton()} onClick={onClose}>
          <Icon.ArrowBack />
        </button>
        <button className={hamburgerButton()} onClick={() => setIsSideBarOpen(true)}>
          <Icon.Hamburger />
        </button>
      </div>

      <div className={header()}>
        <div className={imageContainer()}>
          <div className={backgroundNumber()}>{player.backNumber}</div>
          <img src={player.imageUrl} alt={`${player.name} 선수`} className={playerImage()} />
          <div className={numberBadge()}>{player.backNumber}</div>
          <div className={playerInfoBg()}></div>
          <div className={playerInfo()}>
            <div className={playerName()}>{player.name}</div>
            <div className={universityContainer()}>
              <div className={universityName()}>{player.university}</div>
              <div className={universityDepartment()}>{player.department}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={content()}>
        {player.careers && player.careers.length > 0 && (
          <div className={careersSection()}>
            <div className={sectionTitle()}>주요 경력</div>
            <div className={sectionCard()}>
              {player.careers.map((career, index) => (
                <div key={index} className={careerItem()}>
                  {career}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={careersSection()}>
          <div className={sectionTitle()}>프로필</div>
          <div className={sectionCard()}>
            <div className={infoRow()}>
              <div className={infoLabel()}>생년월일</div>
              <div className={infoValue()}>{player.birth ? formatDate(player.birth) : '-'}</div>
            </div>
            <div className={infoRow()}>
              <div className={infoLabel()}>신장/체중</div>
              <div className={infoValue()}>
                {player.height && player.weight ? `${player.height} / ${player.weight}` : '-'}
              </div>
            </div>
            <div className={infoRow()}>
              <div className={infoLabel()}>포지션</div>
              <div className={infoValue()}>{player.position}</div>
            </div>
            <div className={infoRow()}>
              <div className={infoLabel()}>백넘버</div>
              <div className={infoValue()}>{player.backNumber}</div>
            </div>
          </div>
        </div>
      </div>

      {displayData && displayData.leagueStats && displayData.leagueStats.length > 0 && (
        <div className="w-full">
          <div className="px-5 pb-3">
            <div className={sectionTitle()}>최근 경기 기록</div>
          </div>
          <div className="flex flex-col">
            <div className={statsHeader()}>
              <div className={statItem()}>리그명</div>
              {displayData.leagueStats[0].statKeys.map((statKey) => (
                <div key={statKey} className={statItem()}>
                  {statKey}
                </div>
              ))}
            </div>

            {displayData.leagueStats.map((leagueData, leagueIndex) => (
              <div key={`${leagueIndex}`} className={statsRow()}>
                <div className={statItem()}>{leagueData.league || '-'}</div>
                {leagueData.statKeys.map((statKey) => (
                  <div key={statKey} className={statItem()}>
                    {leagueData.stats[statKey as keyof typeof leagueData.stats] !== undefined &&
                    leagueData.stats[statKey as keyof typeof leagueData.stats] !== null
                      ? leagueData.stats[statKey as keyof typeof leagueData.stats]
                      : '-'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <AnimatePresence>{isSideBarOpen && <SideBar onClose={() => setIsSideBarOpen(false)} />}</AnimatePresence>
    </div>
  );
};

export default PlayerOverlay;
