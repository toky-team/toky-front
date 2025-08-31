import { tv } from "tailwind-variants";

type Team = "고려대" | "연세대";

interface RecordSportDetailProps {
  sport: string;
}

const recordSportDetailVariants = tv({
  slots: {
    container: "w-full mt-13 flex flex-col",
    background: "w-full h-90",
    topSection: "flex flex-col pt-6 items-center justify-between",
    caption: "text-sm font-normal text-white/38",
    title: "text-xl font-bold mt-1",
    tokensRoot: "flex flex-row gap-2 mt-4",
    token: "w-8 h-8 flex justify-center items-center rounded-full font-bold relative border-[1px]",
    tokenText: "inline-block font-bold text-[10px] text-center",
    statsRow: "flex flex-row justify-between mt-14 px-5 w-full",
    teamColLeft: "flex flex-col",
    teamColRight: "flex flex-col items-end",
    teamName: "text-sm font-bold",
    teamWins: "text-[42px] font-normal bg-clip-text text-transparent font-giants-bold tracking-[-1.68px]",
  },
  variants: {
    isKoreaWins: {
      true: {
        background: "w-full h-90 bg-gradient-to-b from-[#F1233C]/0 to-[#F1233C]/15",
      },
      false: {
        background: "w-full h-90 bg-gradient-to-b from-[#2946F6]/0 to-[#2946F6]/15",
      },
    },
    team: {
      고려대: {
        token: "bg-gradient-to-r from-[#F3233C]/30 to-[#F95B6E]/30 border-[#F3233C]",
        tokenText: "bg-gradient-to-r from-[#F3233C] to-[#F95B6E] bg-clip-text text-transparent",
        teamName: "text-[#D32C40]",
        teamWins: "bg-gradient-to-r from-[#F3233C] to-[#F95B6E]",
      },
      연세대: {
        token: "bg-gradient-to-r from-[#5B84FF]/40 to-[#2948FF]/40 border-[#2948FF]",
        tokenText: "bg-gradient-to-r from-[#5B84FF] to-[#2948FF] bg-clip-text text-transparent",
        teamName: "text-[#2948FF]",
        teamWins: "bg-gradient-to-r from-[#5B84FF] to-[#2948FF]",
      },
    },
  },
});

type SportItem = {
  label: string;
  KOREA_WINS: number;
  YONSEI_WINS: number;
};

interface MatchHistoryItem {
  year: string;
  winner: Team;
}

const sports: SportItem[] = [
  { label: "축구", KOREA_WINS: 21, YONSEI_WINS: 18 },
  { label: "럭비", KOREA_WINS: 21, YONSEI_WINS: 25 },
  { label: "야구", KOREA_WINS: 26, YONSEI_WINS: 19 },
  { label: "농구", KOREA_WINS: 24, YONSEI_WINS: 23 },
  { label: "빙구", KOREA_WINS: 18, YONSEI_WINS: 24 },
];

const matchHistories: Record<string, MatchHistoryItem[]> = {
  야구: [
    { year: "2018", winner: "연세대" },
    { year: "2019", winner: "연세대" },
    { year: "2022", winner: "연세대" },
    { year: "2023", winner: "연세대" },
    { year: "2024", winner: "고려대" },
  ],
  축구: [
    { year: "2017", winner: "연세대" },
    { year: "2018", winner: "연세대" },
    { year: "2022", winner: "연세대" },
    { year: "2023", winner: "고려대" },
    { year: "2024", winner: "연세대" },
  ],
  농구: [
    { year: "2018", winner: "연세대" },
    { year: "2019", winner: "고려대" },
    { year: "2022", winner: "고려대" },
    { year: "2023", winner: "고려대" },
    { year: "2024", winner: "연세대" },
  ],
  럭비: [
    { year: "2017", winner: "연세대" },
    { year: "2018", winner: "연세대" },
    { year: "2019", winner: "연세대" },
    { year: "2022", winner: "고려대" },
    { year: "2023", winner: "고려대" },
  ],
  빙구: [
    { year: "2018", winner: "고려대" },
    { year: "2019", winner: "연세대" },
    { year: "2022", winner: "고려대" },
    { year: "2023", winner: "연세대" },
    { year: "2024", winner: "고려대" },
  ],
};

const RecordSportDetail = ({ sport }: RecordSportDetailProps) => {
  const sportItem = sports.find((s) => s.label === sport);
  const isKoreaWins = sportItem ? sportItem.KOREA_WINS > sportItem.YONSEI_WINS : false;
  const {
    container,
    background,
    topSection,
    caption,
    title,
    tokensRoot,
    token,
    tokenText,
    statsRow,
    teamColLeft,
    teamColRight,
    teamName,
    teamWins,
  } = recordSportDetailVariants({ isKoreaWins });
  
  const currentSportHistory = matchHistories[sport] || [];
  const currentSportKoreaWins = sports.find((s) => s.label === sport)?.KOREA_WINS || 0;
  const currentSportYonseiWins = sports.find((s) => s.label === sport)?.YONSEI_WINS || 0;

  return (
    <div className={container()}>
      <div className={background()}>
        <div className={topSection()}>
          <div className={caption()}>역대전적</div>
          <div className={title()}>정기전 {sport} 전적은 {isKoreaWins ? "고려대" : "연세대"}가 우세해요</div>
          <div className={tokensRoot()}>
            {currentSportHistory.map((history) => (
              <div key={history.year} className={token({ team: history.winner })}>
                <span className={tokenText({ team: history.winner })}>{history.year}</span>
              </div>
            ))}
          </div>
          <div className={statsRow()}>
            <div className={teamColLeft()}>
              <div className={teamName({ team: "고려대" })}>
                고려대학교
              </div>
              <div className={teamWins({ team: "고려대" })}>
                {currentSportKoreaWins}승 
              </div>
            </div>
            <div className={teamColRight()}>
              <div className={teamName({ team: "연세대" })}>
                연세대학교
              </div>
              <div className={teamWins({ team: "연세대" })}>
                {currentSportYonseiWins}승
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordSportDetail;