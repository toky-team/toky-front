import client from "@/common/utils/client";
import { useQuery } from "@tanstack/react-query";

interface MatchRecordByPlayerResponse {
  playerId: string;
  leagueStats: {
    league: string;
    statKeys: string[];
    stats: any;
  }[];
}

const getMatchRecordByPlayer = async (playerId: string) => {
  const response = await client.get<MatchRecordByPlayerResponse>(`/match-record/player/${playerId}`);
  return response.data;
};

export default getMatchRecordByPlayer;

export const useGetMatchRecordByPlayer = (playerId: string) => {
  return useQuery({
    queryKey: ['match-record-by-player', playerId],
    queryFn: () => getMatchRecordByPlayer(playerId),
  });
};