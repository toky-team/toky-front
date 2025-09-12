import client from '@/common/utils/client';
import type { SportType, UniversityType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export type BetQuestionAnswer = {
  predict: {
    matchResult: UniversityType | '무승부';
    score: {
      kuScore: number;
      yuScore: number;
    };
  };
  kuPlayer: {
    playerId: string | null;
  };
  yuPlayer: {
    playerId: string | null;
  };
} | null;

interface GetBetQuestionResponse {
  sport: SportType;
  question: string;
  answer: BetQuestionAnswer;
}

const getBetQuestion = async (sport: SportType) => {
  const response = await client.get<GetBetQuestionResponse>('/bet-question', {
    params: {
      sport,
    },
  });
  return response.data;
};

export const useGetBetQuestion = (sport: SportType) => {
  return useQuery({
    queryKey: ['bet-question', sport],
    queryFn: () => getBetQuestion(sport),
  });
};
