import { SportArray } from '@/lib/types';

export const getRandomSport = () => {
  return SportArray[Math.floor(Math.random() * 5)].id;
};

export const getRandomSportWithNull = () => {
  const randomIndex = Math.floor(Math.random() * 8);
  if (randomIndex >= 5) {
    return null;
  }
  return SportArray[randomIndex].id;
};

export default getRandomSport;
