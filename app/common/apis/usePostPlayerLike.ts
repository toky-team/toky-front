import client from "@/common/utils/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

interface PlayerLikeMutationParams {
  playerId: string;
  currentLikes: number;
}

export const usePostPlayerLike = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ playerId }: PlayerLikeMutationParams) => postPlayerLike(playerId),
    onMutate: async ({ playerId, currentLikes }: PlayerLikeMutationParams) => {
      const playerLikeKey = ['player', 'like', playerId];
      
      await queryClient.cancelQueries({ queryKey: playerLikeKey, exact: true });

      const previousLikeCount = queryClient.getQueryData<number>(playerLikeKey) ?? currentLikes;

      queryClient.setQueryData(playerLikeKey, previousLikeCount + 1);

      return { previousLikeCount, playerId };
    },
    onSuccess: (data, { playerId }) => {
      const playerLikeKey = ['player', 'like', playerId];
      queryClient.setQueryData(playerLikeKey, data.likeCount);
    },
    onError: (err, { playerId }, context) => {
      if (context?.previousLikeCount !== undefined) {
        const playerLikeKey = ['player', 'like', playerId];
        queryClient.setQueryData(playerLikeKey, context.previousLikeCount);
      }
    },
  });
};

const postPlayerLike = async (playerId: string): Promise<PlayerLikeResponse> => {
  const response = await client.post<PlayerLikeResponse>(`/player/${playerId}/like`, {
    count: 1,
  });
  return response.data;
};

export default postPlayerLike;