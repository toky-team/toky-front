import MainTopBar from "@/common/components/MainTopBar";
import SportsNavBar, { type SportsTab } from "@/common/components/SportsNavBar";
import NavBar from "@/common/components/NavBar";
import { useState, useEffect } from "react";
import RecordSportDetail from "@/domain/record/components/RecordSportDetail";
import RecordMain from "@/lib/assets/images/record-main.png";
import RecordOverallSummary from "@/domain/record/components/RecordOverallSummary";
import ClicktoCheer from "@/domain/record/components/ClicktoCheer";
import { useNavigate } from "react-router";
import RecordStats from "@/domain/record/components/RecordStats";

export default function Record() {
  const [tab, setTab] = useState<SportsTab>("전체");
  const [timeLeft, setTimeLeft] = useState("");
  const navigate = useNavigate();

  // 목표 시간: 2025년 9월 19일 오전 11시
  const targetDate = new Date(2025, 8, 19, 11, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    } else {
      return "마감되었습니다";
    }
  };

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer();
    
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <MainTopBar />
      <NavBar />
      <SportsNavBar value={tab} onChange={setTab} />
      <div className="w-full -mt-[42px]">
        {tab === "전체" && (
          <div className="w-full flex flex-col">
            <div
              className="relative w-full aspect-[512/341] flex justify-center items-center [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.50)_0%,_rgba(0,_0,_0,_0.50)_100%),_var(--record-bg)_lightgray_-0.191px_0px_/_100.098%_106.557%_no-repeat]"
              style={{ ['--record-bg' as any]: `url(${RecordMain})` }}
            >
              <div className="flex flex-col">
                <div className="text-white text-sm">
                  예측 마감까지
                </div>
                <div className="text-white text-xl font-bold">
                  {timeLeft}
                </div>
                <div onClick={() => navigate("/prediction")} className="absolute left-1/2 -translate-x-1/2 bottom-8 w-34 h-8 text-[#121212] font-bold text-sm bg-white-87 rounded-full px-4 py-2">
                  승부예측하러가기
                </div>
              </div>
            </div>
            <div className="w-full mt-12 flex flex-col justify-center items-center gap-12">
              <RecordOverallSummary />
              <ClicktoCheer />
            </div>
          </div>
        )}
        {tab !== "전체" && (
          <>
            <RecordSportDetail sport={tab} />
            <RecordStats sport={tab === "빙구" ? "아이스하키" : tab} />
          </>
        )}
      </div>
    </>
  )
};

