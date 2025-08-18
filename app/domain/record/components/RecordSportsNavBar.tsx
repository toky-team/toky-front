import { tv } from "tailwind-variants";

export const SPORTS_TABS = ["전체", "야구", "농구", "빙구", "럭비", "축구"] as const;
export type SportsTab = typeof SPORTS_TABS[number];

const root = tv({
  base: "sticky top-0 z-10 w-full h-12 [background:linear-gradient(180deg,_rgba(18,_18,_18,_0.80)_0%,_rgba(18,_18,_18,_0.00)_100%)]",
});

const tabsList = tv({
  base: "w-full justify-between mx-auto px-5 flex flex-row h-full items-center",
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

interface RecordSportsNavBarProps {
  value: SportsTab;
  onChange: (value: SportsTab) => void;
}

const RecordSportsNavBar = ({ value, onChange }: RecordSportsNavBarProps) => {
  return (
    <div className={root()}>
      <div className={tabsList()}>
        {SPORTS_TABS.map((label) => {
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

export default RecordSportsNavBar;