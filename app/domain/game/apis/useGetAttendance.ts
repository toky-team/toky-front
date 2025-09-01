import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

export interface GetAttendanceResponse {
  attendandAt: string;
  isAttended: boolean;
  firstStageResult: boolean | null;
  secondStageResult: boolean | null;
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
