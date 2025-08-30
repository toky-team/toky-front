import { useQuery } from "@tanstack/react-query";
import client from "@/common/utils/client";

const getInviteCode = async () => {
  const response = await client.get('/user/invite-code');
  return response.data;
};

export const useGetInviteCode = () => {
  return useQuery({ queryKey: ['invite-code'], queryFn: getInviteCode });
};