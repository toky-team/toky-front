import { getRandomSportWithNull } from '@/domain/game/utils/getRandomSport';
import type { SportType } from '@/lib/types';

const makeRandomBoard = (targetSport: SportType) => {
  const board = Array.from({ length: 12 }, () => {
    return getRandomSportWithNull();
  });

  const targetCount = board.filter((item) => item === targetSport).length;

  if (targetCount < 3) {
    return makeRandomBoard(targetSport);
  }

  return board;
};

export default makeRandomBoard;
