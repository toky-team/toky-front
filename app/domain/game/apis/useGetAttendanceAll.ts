import client from '@/common/utils/client';
import type { GetAttendanceResponse } from '@/domain/game/apis/useGetAttendance';
import { useQuery } from '@tanstack/react-query';

interface GetAttendanceAllResponse {
  attendances: GetAttendanceResponse[];
  ticketCountByAttendance: number;
}

const getAttendanceAll = async () => {
  const response = await client.get<GetAttendanceAllResponse>('/attendance/all');
  return response.data;
};

export const useGetAttendanceAll = () => {
  return useQuery({
    queryKey: ['attendance-all'],
    queryFn: getAttendanceAll,
  });
};
