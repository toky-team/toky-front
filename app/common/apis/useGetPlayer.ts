import { useQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';
import type { SportType, UniversityType } from '@/lib/types';
import type { PlayerInterface } from '@/lib/types/player';

const getPlayer = async (sport?: SportType, university?: UniversityType) => {
  const response = await client.get<PlayerInterface[]>('/player', {
    params: {
      sport,
      university,
    },
  });
  return response.data;
};

export const useGetPlayer = (sport?: SportType, university?: UniversityType) => {
  return useQuery({
    queryKey: ['player', sport, university],
    queryFn: () => getPlayer(sport, university),
  });
};
