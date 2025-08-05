import { motion } from 'motion/react';

interface Props {
  curProgress: number;
  totalProgress: number;
}
const SignupProgress = ({ curProgress, totalProgress }: Props) => {
  return (
    <div className="bg-white-15 relative h-[5px] w-full">
      <motion.div
        className="bg-white-87 absolute left-0 h-full w-full origin-[0%]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: curProgress / totalProgress }}
        transition={{ type: 'tween' }}
      />
    </div>
  );
};
export default SignupProgress;
