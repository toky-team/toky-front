import type { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

import * as s from './style.css';

interface Props extends PropsWithChildren {
  isSelected: boolean;
  onClick: () => void;
}
const SelectItem = ({ children, isSelected, onClick }: Props) => {
  return (
    <button className={s.SelectItem} onClick={onClick}>
      {children}
      {isSelected && <motion.div layoutId="live-page-menu-underbar" className={s.UnderBar} />}
    </button>
  );
};
export default SelectItem;
