import { useQuery } from '@tanstack/react-query';

// TODO
const getShareScore = async () => {
  return {
    numWinKorea: 1,
    numWinYonsei: 2,
    numDraw: 3,
  };
};

export const useGetShareScore = () => {
  return useQuery({
    queryKey: ['share-score'],
    queryFn: getShareScore,
  });
};
