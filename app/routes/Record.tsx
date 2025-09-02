import MainTopBar from "@/common/components/MainTopBar";
import SportsNavBar, { type SportsTab } from "@/common/components/SportsNavBar";
import NavBar from "@/common/components/NavBar";
import { useState } from "react";
import RecordSportDetail from "@/domain/record/components/RecordSportDetail";
import RecordMain from "@/lib/assets/images/record-main.png";
import RecordOverallSummary from "@/domain/record/components/RecordOverallSummary";
import ClicktoCheer from "@/domain/record/components/ClicktoCheer";
import { useNavigate } from "react-router";
import RecordStats from "@/domain/record/components/RecordStats";

export default function Record() {
  const [tab, setTab] = useState<SportsTab>("전체");
  const navigate = useNavigate();

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
                  10일 10시간 10분 10초 전
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
            <RecordStats sport={tab} />
          </>
        )}
      </div>
    </>
  )
};

