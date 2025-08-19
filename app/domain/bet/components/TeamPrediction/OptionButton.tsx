import type { UniversityType } from '@/lib/types';
import { motion } from 'motion/react';
import * as s from './style.css';

const motionVariant = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

interface Props {
  value: UniversityType | '무승부';
  text: string;
  position: 'left' | 'center' | 'right';
  handleClick: (value: UniversityType | '무승부') => void;
  percentage: number;
  myAnswer: UniversityType | '무승부' | null;
  realAnswer: UniversityType | '무승부' | null;
}
const OptionButton = ({ value, text, position, handleClick, percentage, myAnswer, realAnswer }: Props) => {
  const isAnswered = myAnswer !== null; // 답변을 한 문항인지
  const isMyAnswer = myAnswer === value; // 내가 선택한 답변인지
  const hasRealAnswer = realAnswer !== null; // 정답이 공개된 문제인지
  const isRealAnswer = realAnswer === value; // 정답인지
  const isCorrect = isRealAnswer && isMyAnswer; // 이 옵션으로 정답을 맞췄는지

  return (
    <div className={s.ButtonContainer}>
      {isCorrect && <div className={s.StickerWrapper}>{/* TODO: 정답 아이콘 */}</div>}
      <button
        key={value}
        className={s.BetButton({ position, isAnswered, isMyAnswer })}
        onClick={() => {
          if (hasRealAnswer || isMyAnswer) return;
          handleClick(value);
        }}
      >
        {!isCorrect && (
          <>
            {text}
            {(isAnswered || hasRealAnswer) && (
              <p>
                <span>{percentage}</span>
                <span>%</span>
              </p>
            )}
          </>
        )}

        {/* default gradient */}
        <motion.div
          className={s.ButtonGradient({ type: 'default', position })}
          variants={motionVariant}
          initial={'visible'}
          animate={isAnswered || hasRealAnswer ? 'hidden' : 'visible'}
        />

        {/* selected gradient */}
        <motion.div
          className={s.ButtonGradient({ type: 'selected', position })}
          variants={motionVariant}
          initial={'hidden'}
          animate={isMyAnswer ? 'visible' : 'hidden'}
        />

        {/* nonselected gradient */}
        <motion.div
          className={s.ButtonGradient({ type: 'nonSelected', position })}
          variants={motionVariant}
          initial={'hidden'}
          animate={isMyAnswer ? 'hidden' : 'visible'}
        />
      </button>
    </div>
  );
};
export default OptionButton;
