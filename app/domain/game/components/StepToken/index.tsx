import * as s from './style.css';

interface Props {
  step: number;
  retry?: boolean;
}
const StepToken = ({ step, retry }: Props) => {
  return <div className={s.StepIndicator}>{retry ? `${step}단계 재도전` : `${step}단계`}</div>;
};
export default StepToken;
