import { motion } from 'motion/react';

interface Props {
  curProgress: number;
  totalProgress: number;
}
const SignupProgress = ({ curProgress, totalProgress }: Props) => {
  // TODO: Style 손보기
  return (
    <div className="relative h-[5px] w-full bg-gray-700">
      <motion.div
        className="bg-white-87 absolute left-0 h-full w-full origin-[0%]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: curProgress / totalProgress }}
      />
    </div>
  );
};
export default SignupProgress;
