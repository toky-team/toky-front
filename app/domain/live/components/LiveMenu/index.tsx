import * as s from './style.css';

import SelectItem from '@/domain/live/components/LiveMenu/SelectItem';

interface Props {
  page: 'chat' | 'analysis';
  setPage: (page: 'chat' | 'analysis') => void;
}
const LiveMenu = ({ page, setPage }: Props) => {
  return (
    <div className={s.Container}>
      <SelectItem isSelected={page === 'chat'} onClick={() => setPage('chat')}>
        댓글
      </SelectItem>
      <SelectItem isSelected={page === 'analysis'} onClick={() => setPage('analysis')}>
        전력분석
      </SelectItem>
    </div>
  );
};
export default LiveMenu;
