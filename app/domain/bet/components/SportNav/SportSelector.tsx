import type { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

import * as s from './style.css';

interface Props extends PropsWithChildren {
  isSelected: boolean;
  onClick: () => void;
}
const SportSelector = ({ children, isSelected, onClick }: Props) => {
  return (
    <button className={s.SportSelector({ isSelected })} onClick={onClick}>
      {children}
      {isSelected && <motion.div layoutId="sport-selector-underbar" className={s.UnderBar} />}
    </button>
  );
};
export default SportSelector;
