import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

interface GetAttendanceResponse {
  attendandAt: string;
  isAttended: boolean;
}

const getAttendance = async () => {
  const response = await client.get<GetAttendanceResponse>('/attendance');
  return response.data;
};

export const useGetAttendance = () => {
  return useQuery({
    queryKey: ['today-attendance'],
    queryFn: getAttendance,
  });
};
