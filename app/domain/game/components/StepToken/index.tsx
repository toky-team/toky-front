import * as s from './style.css';

interface Props {
  step: number;
}
const StepToken = ({ step }: Props) => {
  return <div className={s.StepIndicator}>{step}단계</div>;
};
export default StepToken;
