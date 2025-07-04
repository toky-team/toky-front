import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getTicketCount = async () => {
  const response = await client.get<number>('/ticket');
  return response.data;
};

const useGetTicketCount = () => {
  return useQuery({
    queryKey: ['ticket-count'],
    queryFn: getTicketCount,
  });
};

export default useGetTicketCount;
