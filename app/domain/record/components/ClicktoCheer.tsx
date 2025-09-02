import { tv } from "tailwind-variants";
import { useState } from "react";
import { usePostCheer } from "@/common/apis/usePostCheer";
import { useGetCheerCount } from "@/common/apis/useGetCheerCount";

type Team = "고려대학교" | "연세대학교";

const clicktoCheerVariants = tv({
  slots: {
    root: "w-full flex flex-col items-center gap-6 px-5 py-15 [background:var(--color-background-5)]",
    title: "text-white-87 text-xl font-bold text-center",
    buttonsRow: "w-full flex justify-center items-center gap-px",
    leftButton: "px-10 py-6 rounded-l-[10px] bg-gradient-to-b from-white/14 to-white/14 bg-[#121212] text-white text-base font-bold transition-colors",
    rightButton: "px-10 py-6 rounded-r-[10px] bg-gradient-to-b from-white/14 to-white/14 bg-[#121212] text-white text-base font-bold transition-colors",
    footer: "text-white-87 text-base text-center",
  },
  variants: {
    selected: {
      left: {
        leftButton: "bg-gradient-to-l from-[#F3233C] to-[#F3233C]/25",
      },
      right: {
        rightButton: "bg-gradient-to-l from-[#2948FF]/25 to-[#2948FF]",
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
  const { mutate: postCheer } = usePostCheer(selectedTeam as string);

  const { data: cheerCount } = useGetCheerCount();
  const leftCount = cheerCount?.KUCheer;
  const rightCount = cheerCount?.YUCheer;

  const handleCheer = (team: Team) => {
    setSelectedTeam(team);
    postCheer;
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
        현재 <span className="font-bold">{leftCount}명</span>이 고려대학교, <span className="font-bold">{rightCount}명</span>이 연세대학교를 응원하고있어요!
      </div>
    </div>
  );
};

export default ClicktoCheer; 