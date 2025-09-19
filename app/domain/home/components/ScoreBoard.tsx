import { useGetEntireScore } from '@/common/apis/useGetEntireScore';
import { tv } from 'tailwind-variants';
import KoreaWhiteSymbol from '@/lib/assets/images/korea_symbol_white_score_board.png';
import YonseiWhiteSymbol from '@/lib/assets/images/yonsei_symbol_white_score_board.png';

const containerVariants = tv({
  slots: {
    Container: 'w-full p-6 flex items-center justify-center relative',
    Score: 'flex flex-col items-center',
    ScoreNumber: 'text-[36px] font-bold font-giants-bold',
    ScoreTitle: 'text-[16px] font-normal',
    ScoreTeam: 'flex flex-row text-white/50 text-[13px] gap-10',
  },
});

const ScoreBoard = () => {
  const { data: entireScore, isLoading } = useGetEntireScore();

  const { Container, Score, ScoreNumber, ScoreTitle, ScoreTeam } = containerVariants();

  const localNow = new Date();
  const kstNow = new Date(localNow.getTime() + (9 * 60 + localNow.getTimezoneOffset()) * 60000);
  const isFirstDay = kstNow.getMonth() === 8 && kstNow.getDate() === 19;

  return (
  <div className={Container()}>
    <img src={KoreaWhiteSymbol} alt="고려대" className="absolute left-0 top-0 w-[100px] h-[136px]" />
    <img src={YonseiWhiteSymbol} alt="연세대" className="absolute right-0 top-0 w-[100px] h-[136px]" />
    <div className={Score()}>
      <div className={ScoreTitle()}>
        {isFirstDay ? '2025 정기전 1일차' : '2025 정기전 2일차'}
      </div>
      <div className={ScoreNumber()}>
        {isLoading ? '— : —' : `${'0' + entireScore?.KUScore} : ${'0' + entireScore?.YUScore}`}
      </div>
      <div className={ScoreTeam()}>
        <div>고려대</div>
        <div>연세대</div>
      </div>
    </div>
  </div>);
};

export default ScoreBoard;