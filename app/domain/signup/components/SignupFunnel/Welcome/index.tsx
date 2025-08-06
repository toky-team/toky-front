import { motion, type Transition } from 'motion/react';

import * as s from './style.css';
import { useSignupForm } from '@/domain/signup/stores/SignupFormStore';

const AnimatieTransition: Transition = {
  delay: 1,
  duration: 1,
};

// TODO: 스타일링
interface Props {
  curProgress: number;
}
const Welcome = ({ curProgress }: Props) => {
  const name = useSignupForm((state) => state.name);
  const startAnimation = curProgress === 5;

  return (
    <div className={s.Wrapper}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: startAnimation ? 0 : 1 }}
        transition={AnimatieTransition}
      >
        원래 이미지
        {/* <image className={s.Image} /> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: startAnimation ? 1 : 0 }}
        transition={AnimatieTransition}
      >
        환영합니다.
        <br />
        {name}님
      </motion.div>
    </div>
  );
};
export default Welcome;
