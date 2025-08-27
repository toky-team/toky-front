import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

interface GetAttendanceAllResponse {
  attendances: [
    {
      attendandAt: string;
      isAttended: boolean;
    },
  ];
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
