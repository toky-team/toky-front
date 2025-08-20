import type { BetAnswer } from '@/domain/bet/apis/usePostBet';
import { DEFAULT_BET_DATA } from '@/domain/bet/constants';
import type { SportType } from '@/lib/types';

const editBetAnswer = (sport: SportType, betData: BetAnswer | undefined): BetAnswer => {
  if (!betData) return DEFAULT_BET_DATA(sport);

  return {
    sport,
    player: {
      kuPlayerId: betData.player.kuPlayerId || null,
      yuPlayerId: betData.player.yuPlayerId || null,
    },
    predict: {
      score: betData.predict.score || undefined,
      matchResult: betData.predict.matchResult && !betData.predict.score ? betData.predict.matchResult : undefined,
    },
  };
};

export default editBetAnswer;
