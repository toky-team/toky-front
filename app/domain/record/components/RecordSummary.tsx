import { overallSummaryVariants, type SportItem } from '@/domain/record/components/RecordOverallSummary';

const { bar, leftBar, rightBar, scoreRow, scoreColLeft, scoreColRight, scoreValue, scoreSchool } =
  overallSummaryVariants();

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
