import { useSignupForm } from '@/domain/signup/stores/SignupFormStore';
import { motion, type Transition } from 'motion/react';

import * as s from './style.css';
import { Link } from 'react-router';

const AnimationTransition: Transition = {
  delay: 1,
  duration: 1,
};

const WelcomePage = () => {
  const name = useSignupForm((state) => state.name);

  return (
    <div className={s.Wrapper}>
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={AnimationTransition}>
        원래 이미지
        {/* <image className={s.Image} /> */}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={AnimationTransition}>
        환영합니다.
        <br />
        {name}님
      </motion.div>
      <Link className={s.Button} to="/" replace>
        토키 시작하기
      </Link>
    </div>
  );
};
export default WelcomePage;
