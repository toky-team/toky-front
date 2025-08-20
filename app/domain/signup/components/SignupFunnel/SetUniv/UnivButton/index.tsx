import { useSignupForm } from '@/domain/signup/stores/SignupFormStore';
import type { UniversityType } from '@/lib/types';
import { motion } from 'motion/react';

import * as s from './style.css';

const motionVariant = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

interface Props {
  univ: UniversityType;
}
const UnivButton = ({ univ }: Props) => {
  const selectedUniversity = useSignupForm((state) => state.university);
  const setUniversity = useSignupForm((state) => state.setUniversity);

  const isSelected = selectedUniversity === univ;

  return (
    <button className={s.Container({ isSelected })} onClick={() => setUniversity(univ)}>
      {univ}
      <motion.div
        className={s.Gradient({ univ })}
        variants={motionVariant}
        initial={'hidden'}
        animate={isSelected ? 'visible' : 'hidden'}
      />
      <div className={s.Background} />
    </button>
  );
};
export default UnivButton;
