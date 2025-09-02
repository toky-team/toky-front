import client from "@/common/utils/client";
import { useMutation } from "@tanstack/react-query";

export interface PlayerLikeResponse {
  id: string;
  name: string;
  university: string;
  sport: string;
  department: string;
  birth: any;
  height: any;
  weight: any;
  position: string;
  backNumber: number;
  careers: string[];
  imageUrl: string;
  likeCount: number;
  isPrimary: boolean;
}

export const usePostPlayerLike = () => {
  return useMutation({
    mutationFn: postPlayerLike,
  });
};

const postPlayerLike = async (playerId: string): Promise<PlayerLikeResponse> => {
  const response = await client.post<PlayerLikeResponse>(`/player/${playerId}/like`, {
    count: 1,
  });
  return response.data;
};

export default postPlayerLike;