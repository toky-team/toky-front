import { useEffect, useState, type ReactNode } from 'react';

import * as s from './style.css';
import Icon from '@/lib/assets/icons';

interface Props {
  curProgress: number;
  selected: boolean;
  onClick: () => void;
  text: string;
  details: ReactNode;
}
const TermButton = ({ curProgress, selected, onClick, text, details }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [curProgress]);

  return (
    <div className={s.Wrapper}>
      <button className={s.ButtonWrapper} onClick={onClick}>
        <div className={s.CheckWrapper}>
          <Icon.Check opacity={selected ? 0.87 : 0.38} />
          <div className={s.CheckGradient({ selected })} />
        </div>
        <div className={s.ContentsWrapper}>
          {text}
          <div
            className={s.FoldHandler}
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
          >
            {isOpen ? '접기' : '펼치기'}
          </div>
        </div>
      </button>
      {isOpen && <div className={s.Details}>{details}</div>}
    </div>
  );
};
export default TermButton;
