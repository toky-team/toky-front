import MainTopBar from "@/common/components/MainTopBar";
import SportsNavBar, { type SportsTab } from "@/common/components/SportsNavBar";
import NavBar from "@/common/components/NavBar";
import { useState } from "react";
import CustomCarousel from "@/common/components/CustomCarousel";
import FullPlayerView from "@/domain/player/components/FullPlayerView";
import PrimaryPlayerView from "@/domain/player/components/PrimaryPlayerView"
import { useGetPlayer } from "@/common/apis/useGetPlayer";
import type { SportType } from "@/lib/types";
import BannerSoccer from "@/lib/assets/images/banner_soccer.webp";
import BannerBaseball from "@/lib/assets/images/banner_baseball.webp";
import BannerBasketball from "@/lib/assets/images/banner_basketball.webp";
import BannerRugby from "@/lib/assets/images/banner_rugby.webp";
import BannerIcehockey from "@/lib/assets/images/banner_hockey.webp";

// UI 표시용 SportsTab을 API용 SportType으로 변환
const sportsTabToSportType = (tab: SportsTab): SportType => {
  const mapping: Record<Exclude<SportsTab, "전체">, SportType> = {
    "야구": "야구",
    "축구": "축구", 
    "농구": "농구",
    "럭비": "럭비",
    "빙구": "아이스하키",
  };
  return mapping[tab as Exclude<SportsTab, "전체">];
};

const Player = () => {
  const [currentSport, setCurrentSport] = useState<SportType>("야구");
  const [displayTab, setDisplayTab] = useState<Exclude<SportsTab, "전체">>("야구");

  const slides = [
    { id: '1', image: "", alt: '슬라이드 1' },
  ]; 

  const { data: koreaPlayers = [] } = useGetPlayer(currentSport, "고려대학교");
  const { data: yonseiPlayers = [] } = useGetPlayer(currentSport, "연세대학교");

  const koreaPrimaryPlayers = koreaPlayers.filter((player) => player.isPrimary === true);
  const yonseiPrimaryPlayers = yonseiPlayers.filter((player) => player.isPrimary === true);

  const primaryPlayers = [...koreaPrimaryPlayers, ...yonseiPrimaryPlayers].sort((a, b) => a.careers.length - b.careers.length);

  const handleTabChange = (newTab: SportsTab) => {
    if (newTab !== "전체") {
      const sportType = sportsTabToSportType(newTab);
      setCurrentSport(sportType);
      setDisplayTab(newTab as Exclude<SportsTab, "전체">);
    }
  };

  if (currentSport === "축구") {
    slides[0].image = BannerSoccer;
  } else if (currentSport === "야구") {
    slides[0].image = BannerBaseball;
  } else if (currentSport === "농구") {
    slides[0].image = BannerBasketball;
  } else if (currentSport === "럭비") {
    slides[0].image = BannerRugby;
  } else if (currentSport === "아이스하키") {
    slides[0].image = BannerIcehockey;
  }

  return (
    <>
      <MainTopBar />
      <NavBar />
      <SportsNavBar viewAll={false} value={displayTab} onChange={handleTabChange} />
      <div className="w-full flex flex-col gap-10">
        <CustomCarousel slides={slides} indicator="dots" />
        <PrimaryPlayerView primaryPlayers={primaryPlayers} />
        <FullPlayerView koreaPlayers={koreaPlayers} yonseiPlayers={yonseiPlayers} />
      </div>
    </>
  );
};

export default Player;