import { motion } from 'motion/react';

import * as s from './style.css';

import type { UniversityType } from '@/lib/types';
import Icon from '@/lib/assets/icons';

const motionVariant = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

interface Props {
  isLoading: boolean;
  value: UniversityType | '무승부';
  text: string;
  position: 'left' | 'center' | 'right';
  handleClick: (value: UniversityType | '무승부') => void;
  percentage: number;
  myAnswer: UniversityType | '무승부' | null;
  realAnswer: UniversityType | '무승부' | null;
}
const OptionButton = ({ value, text, position, handleClick, percentage, myAnswer, realAnswer, isLoading }: Props) => {
  const isAnswered = myAnswer !== null; // 답변을 한 문항인지
  const isMyAnswer = myAnswer === value; // 내가 선택한 답변인지
  const hasRealAnswer = realAnswer !== null; // 정답이 공개된 문제인지
  const isRealAnswer = realAnswer === value; // 정답인지
  const isCorrect = isRealAnswer && isMyAnswer; // 이 옵션으로 정답을 맞췄는지

  return (
    <div className={s.ButtonContainer}>
      {isCorrect && (
        <div className={s.StickerWrapper}>
          <Icon.Hit />
        </div>
      )}
      <button
        key={value}
        className={s.BetButton({ position, isAnswered, isMyAnswer })}
        onClick={() => {
          if (hasRealAnswer || isMyAnswer) return;
          handleClick(value);
        }}
      >
        {!isCorrect && !isLoading && (
          <>
            {text}
            {(isAnswered || hasRealAnswer) && (
              <div className={s.PercentageWrapper({ isMyAnswer })}>
                <span className={s.PercentageNumber({ isMyAnswer })}>{percentage}</span>
                <span className={s.PercentageText}>%</span>
              </div>
            )}
          </>
        )}

        {/* default gradient */}
        <motion.div
          className={s.ButtonGradient({ type: 'default', position })}
          variants={motionVariant}
          initial={'hidden'}
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
          initial={'visible'}
          animate={isMyAnswer ? 'hidden' : 'visible'}
        />
      </button>
    </div>
  );
};
export default OptionButton;
