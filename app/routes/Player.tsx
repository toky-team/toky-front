import MainTopBar from "@/common/components/MainTopBar";
import RecordSportsNavBar, { type SportsTab } from "@/domain/record/components/RecordSportsNavBar";
import NavBar from "@/common/components/NavBar";
import { useState } from "react";
import CustomCarousel from "@/common/components/CustomCarousel";
import FullPlayerList from "@/domain/player/components/FullPlayerList";


const Player = () => {
  const [tab, setTab] = useState<SportsTab>("전체");
  const tempSlides = [
    { id: '1', image: "https://placehold.co/600x200", alt: '슬라이드 1' },
    { id: '2', image: "https://placehold.co/600x200", alt: '슬라이드 2' },
    { id: '3', image: "https://placehold.co/600x200", alt: '슬라이드 3' }
  ];

  return (
    <>
      <MainTopBar />
      <NavBar />
      <RecordSportsNavBar value={tab} onChange={setTab} />
      <div className="w-full">
        <CustomCarousel slides={tempSlides} indicator="dots" />
        <FullPlayerList />
      </div>
    </>
  );
};

export default Player;