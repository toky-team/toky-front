import { tv } from "tailwind-variants";

export const SPORTS_TABS = ["전체", "야구", "축구", "농구", "럭비", "빙구"] as const;
export type SportsTab = typeof SPORTS_TABS[number];

const root = tv({
  base: "sticky top-0 z-10 w-full h-[44px] flex justify-center items-center bg-gradient-to-b from-[#121212]/80 to-[#121212]/0",
});

const tabsList = tv({
  base: "w-full justify-between mx-auto px-5 flex flex-row py-[9px] items-center",
});

const tabStyle = tv({
  base: "relative text-base font-medium transition-colors",
  variants: {
    active: {
      true: "text-white",
      false: "text-white-disabled-38",
    },
  },
  defaultVariants: {
    active: false,
  },
});

interface SportsNavBarProps {
  value: SportsTab;
  onChange: (value: SportsTab) => void;
  viewAll?: boolean;
}

const SportsNavBar = ({ viewAll = true, value, onChange }: SportsNavBarProps) => {
  const tabsToShow = viewAll ? SPORTS_TABS : SPORTS_TABS.filter(tab => tab !== "전체");
  
  return (
    <div className={root()}>
      <div className={tabsList()}>
        {tabsToShow.map((label) => {
          const isActive = value === label;
          return (
            <button
              key={label}
              className={tabStyle({ active: isActive })}
              onClick={() => onChange(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SportsNavBar;