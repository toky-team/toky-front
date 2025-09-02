import { useQuery } from "@tanstack/react-query";
import client from "@/common/utils/client";

interface MatchRecordBySportResponse {
  sport: string;
  league: string;
  imageUrl: string;
  universityStatKeys: string[];
  universityStats: {
    university: string;
    stats: Record<string, string>;
  }[];
  playerStatsWithCategory: {
    category: string;
    playerStatKeys: string[];
    playerStats: {
      playerId: string;
      name: string;
      university: string;
      position: string;
      stats: Record<string, string>;
    }[];
  }[];
}[];

const getMatchRecordBySport = async (sport: string) => {
  const response = await client.get<MatchRecordBySportResponse>("/match-record/", {
    params: {
      sport: sport,
    },
  });
  return response.data;
};

export const useGetMatchRecordBySport = (sport: string) => {
  return useQuery({
    queryKey: ['match-record', sport],
    queryFn: () => getMatchRecordBySport(sport),
  });
};