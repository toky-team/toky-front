import { tv } from 'tailwind-variants';

import { type SportItem } from '@/domain/record/components/RecordOverallSummary';

const recordSummaryVariants = tv({
  slots: {
    bar: 'relative h-3 overflow-hidden',
    leftBar: 'h-full rounded-l-[34px] bg-gradient-to-l from-[#F3233C] to-[#F3233C]/25',
    rightBar: 'absolute right-0 top-0 bottom-0 rounded-r-[34px] bg-gradient-to-l from-[#2948FF]/25 to-[#2948FF]',
    scoreRow: 'flex items-center justify-between',
    scoreColLeft: 'text-white-87 text-sm',
    scoreColRight: 'text-white-87 text-sm text-right',
    scoreValue: 'text-white-87 font-bold text-lg',
    scoreSchool: 'text-white-60 text-xs font-normal',
  },
});
const { bar, leftBar, rightBar, scoreRow, scoreColLeft, scoreColRight, scoreValue, scoreSchool } =
  recordSummaryVariants();

interface Props {
  s: SportItem;
  leftPct: number;
  rightPct: number;
}
const RecordSummary = ({ s, leftPct, rightPct }: Props) => {
  return (
    <>
      <div className={bar()}>
        <div className={leftBar()} style={{ width: `${leftPct}%` }} />
        <div className={rightBar()} style={{ width: `${rightPct}%` }} />
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
    </>
  );
};
export default RecordSummary;
