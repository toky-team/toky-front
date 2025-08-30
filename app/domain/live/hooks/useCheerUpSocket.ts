import { cheerUpSocket } from '@/common/utils/socket';
import type { SportType } from '@/lib/types';
import type { CheerUpInterface } from '@/lib/types/live';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const useCheerUpSocket = (sport: SportType) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const onLikeUpdate = ({ like }: { like: CheerUpInterface }) => {
      queryClient.setQueryData(['cheer-up', sport], {
        sport,
        KULike: like.KULike,
        YULike: like.YULike,
      });
    };

    cheerUpSocket.emit('join_room', { sport });
    cheerUpSocket.on('like_update', onLikeUpdate);

    return () => {
      cheerUpSocket.off('like_update', onLikeUpdate);
      cheerUpSocket.emit('leave_room', { sport });
    };
  }, [sport, queryClient]);
};

export default useCheerUpSocket;
