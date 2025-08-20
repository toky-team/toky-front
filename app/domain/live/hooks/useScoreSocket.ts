import { scoreSocket } from '@/common/utils/socket';
import { useGetScore } from '@/domain/live/apis/useGetScore';
import type { SportType } from '@/lib/types';
import { useEffect, useState } from 'react';

interface Props {
  sport: SportType;
}
export const useScoreSocket = ({ sport }: Props) => {
  const { data } = useGetScore(sport);
  const [liveKUScore, setLiveKUScore] = useState<number | undefined>(undefined);
  const [liveYUScore, setLiveYUScore] = useState<number | undefined>(undefined);

  const onReceiveScore = ({
    score,
  }: {
    score: {
      sport: SportType;
      KUScore: number;
      YUScore: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
  }) => {
    setLiveKUScore(score.KUScore);
    setLiveYUScore(score.YUScore);
  };

  useEffect(() => {
    scoreSocket.emit('join_room', { sport });
    scoreSocket.on('score_update', onReceiveScore);

    return () => {
      scoreSocket.emit('leave_room', { sport });
      scoreSocket.off('score_update', onReceiveScore);
    };
  }, [sport]);

  const KUScore = liveKUScore || data?.KUScore || 0;
  const YUScore = liveYUScore || data?.YUScore || 0;

  return { KUScore, YUScore };
};
