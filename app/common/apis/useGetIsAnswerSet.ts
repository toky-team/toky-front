import { useQuery } from "@tanstack/react-query";
import client from "@/common/utils/client";

const getIsAnswerSet = async () => {
  const response = await client.get<boolean>('/bet-question/is-answer-set');
  return response.data;
};

export const useGetIsAnswerSet = () => {
  return useQuery({
    queryKey: ['is-answer-set'],
    queryFn: () => getIsAnswerSet(),
  });
};