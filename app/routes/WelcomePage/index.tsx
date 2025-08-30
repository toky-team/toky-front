import { motion, type Transition } from 'motion/react';
import Welcome1 from '@/lib/assets/images/welcome_1.webp';
import Welcome2 from '@/lib/assets/images/welcome_2.webp';

import * as s from './style.css';
import { Link } from 'react-router';
import { useGetUserInfo } from '@/common/apis/useGetUserInfo';

const AnimationTransition: Transition = {
  delay: 1,
  duration: 1,
};

const WelcomePage = () => {
  const userInfo = useGetUserInfo();

  return (
    <div className={s.Wrapper}>
      <motion.div className={s.Text} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={AnimationTransition}>
        환영합니다.
        <br />
        <strong className={s.Nickname}>{userInfo.data?.name}</strong>님
      </motion.div>
      <motion.img
        className={s.Image}
        src={Welcome1}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={AnimationTransition}
      />
      <motion.img
        className={s.Image}
        src={Welcome2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={AnimationTransition}
      />
      <Link className={s.Button} to="/" replace>
        토키 시작하기
      </Link>
    </div>
  );
};
export default WelcomePage;
