import KoreaUniversitySymbol from "@/lib/assets/images/korea-symbol-white.png";
import YonseiUniversitySymbol from "@/lib/assets/images/yonsei-symbol-white.png";
import { tv } from "tailwind-variants";

type SportItem = {
  label: string;
  KOREA_WINS: number;
  YONSEI_WINS: number;
};

const sports: SportItem[] = [
  { label: "축구", KOREA_WINS: 20, YONSEI_WINS: 17 },
  { label: "럭비", KOREA_WINS: 20, YONSEI_WINS: 25 },
  { label: "야구", KOREA_WINS: 25, YONSEI_WINS: 18 },
  { label: "농구", KOREA_WINS: 23, YONSEI_WINS: 22 },
  { label: "빙구", KOREA_WINS: 17, YONSEI_WINS: 23 },
];

const overallSummaryVariants = tv({
  slots: {
    root: "w-full max-w-screen-sm mx-auto flex flex-col gap-6",
    header: "flex flex-col gap-6 px-5",
    heading: "text-white-87 text-xl font-bold text-center",
    divider: "w-full h-px bg-white opacity-15",
    statsRow: "flex items-center justify-center gap-12 text-white-87",
    statsCol: "flex flex-col items-center gap-2",
    statsTitle: "text-sm",
    statsValue: "text-3xl font-bold",
    listRoot: "px-5 flex flex-col gap-3",
    sportRow: "w-full flex flex-col gap-2",
    sportLabel: "flex items-center justify-center text-white-87 font-semibold",
    bar: "relative h-3 bg-white-15 overflow-hidden",
    leftBar: "h-full rounded-l-[34px] bg-gradient-to-l from-[#F3233C] to-[#F3233C]/25",
    rightBar: "absolute right-0 top-0 bottom-0 rounded-r-[34px] bg-gradient-to-l from-[#2948FF]/25 to-[#2948FF]",
    scoreRow: "flex items-center justify-between",
    scoreColLeft: "text-white-87 text-sm",
    scoreColRight: "text-white-87 text-sm text-right",
    scoreValue: "text-white-87 font-bold text-lg",
    scoreSchool: "text-white-60 text-xs font-normal",
  },
});

const RecordOverallSummary = () => {
  const totalLeft = 19;
  const totalDraw = 10;
  const totalRight = 20;

  const { 
    root, 
    header, 
    heading, 
    divider, 
    statsRow, 
    statsCol, 
    statsTitle, 
    statsValue, 
    listRoot, 
    sportRow, 
    sportLabel, 
    bar, 
    leftBar, 
    rightBar, 
    scoreRow, 
    scoreColLeft, 
    scoreColRight, 
    scoreValue, 
    scoreSchool 
  } = overallSummaryVariants();

  return (
    <div className={root()}>
      <div className={header()}>
        <div className={heading()}>
          역대 정기전 종합 성적
        </div>
        <div className="flex flex-col gap-3">
          <div className={divider()} />
          <div className={statsRow()}>
            <div className={statsCol()}>
              <div className={statsTitle()}>고려대학교</div>
              <div className={statsValue()}>{totalLeft}승</div>
            </div>
            <div className={statsCol()}>
              <div className={statsTitle()}>무승부</div>
              <div className={statsValue()}>{totalDraw}</div>
            </div>
            <div className={statsCol()}>
              <div className={statsTitle()}>연세대학교</div>
              <div className={statsValue()}>{totalRight}승</div>
            </div>
          </div>
          <div className={divider()} />
        </div>

      </div>
      <div className="relative">
        <img src={KoreaUniversitySymbol} alt="korea" className="pointer-events-none absolute left-0 top-1/3 -translate-y-1/2 z-10" />
        <img src={YonseiUniversitySymbol} alt="yonsei" className="pointer-events-none absolute right-0 top-2/3 -translate-y-1/2 z-10" />
        <div className={listRoot()}>
          {sports.map((s) => {
            const sum = s.KOREA_WINS + s.YONSEI_WINS;
            const leftPct = Math.round((s.KOREA_WINS / sum) * 1000) / 10;
            const rightPct = 100 - leftPct;
            return (
              <div key={s.label} className={sportRow()}>
                <div className={sportLabel()}>{s.label}</div>
                <div className={bar()}>
                  <div
                    className={leftBar()}
                    style={{ width: `${leftPct}%` }}
                  />
                  <div
                    className={rightBar()}
                    style={{ width: `${rightPct}%` }}
                  />
                </div>
                <div className={scoreRow()}>
                  <div className={scoreColLeft()}>
                    <div className="flex flex-col items-start">
                      <div className={scoreValue()}>{s.KOREA_WINS}승</div>
                      <div className={scoreSchool()}>고려대학교</div>
                    </div>
                  </div>
                  <div className={scoreColRight()}>
                    <div className="flex flex-col items-end">
                      <div className={scoreValue()}>{s.YONSEI_WINS}승</div>
                      <div className={scoreSchool()}>연세대학교</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecordOverallSummary; 