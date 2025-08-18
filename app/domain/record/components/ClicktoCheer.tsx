import { tv } from "tailwind-variants";
import { useState } from "react";

type Team = "고려대학교" | "연세대학교";

const clicktoCheerVariants = tv({
  slots: {
    root: "w-full flex flex-col items-center gap-6 px-5 py-15 [background:var(--color-background-5)]",
    title: "text-white-87 text-xl font-bold text-center",
    buttonsRow: "w-full flex justify-center items-center gap-px",
    leftButton: "px-10 py-6 [border-radius:10px_0_0_10px] [background:linear-gradient(0deg,_rgba(255,_255,_255,_0.14)_0%,_rgba(255,_255,_255,_0.14)_100%),_#121212] text-white text-base font-bold transition-colors",
    rightButton: "px-10 py-6 [border-radius:0_10px_10px_0] [background:linear-gradient(0deg,_rgba(255,_255,_255,_0.14)_0%,_rgba(255,_255,_255,_0.14)_100%),_#121212] text-white text-base font-bold transition-colors",
    footer: "text-white-87 text-sm text-center break-keep",
  },
  variants: {
    selected: {
      left: {
        leftButton: "[background:linear-gradient(270deg,_#F3233C_0%,_rgba(243,_35,_60,_0.25)_100%)]",
      },
      right: {
        rightButton: "[background:linear-gradient(270deg,_rgba(41,_72,_255,_0.25)_0%,_#2948FF_100%)]",
      },
      none: {},
    },
  },
  defaultVariants: {
    selected: "none",
  },
});

const ClicktoCheer = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  
  // TODO: API 훅으로 교체
  const leftCount = 1500;
  const rightCount = 1500;

  const handleCheer = (team: Team) => {
    setSelectedTeam(team);
    // TODO: API 호출
  };

  const selectedVariant = selectedTeam === "고려대학교" ? "left" : selectedTeam === "연세대학교" ? "right" : "none";
  const { root, title, buttonsRow, leftButton, rightButton, footer } = clicktoCheerVariants({ selected: selectedVariant });

  return (
    <div className={root()}>
      <div className={title()}>자신의 학교를 응원해주세요!</div>
      <div className={buttonsRow()}>
        <button className={leftButton()} onClick={() => handleCheer("고려대학교")}>
          고려대학교
        </button>
        <button className={rightButton()} onClick={() => handleCheer("연세대학교")}>
          연세대학교
        </button>
      </div>
      <div className={footer()}>
        현재 {leftCount}명이 고려대학교, {rightCount}명이 연세대학교를 응원하고있어요!
      </div>
    </div>
  );
};

export default ClicktoCheer; 