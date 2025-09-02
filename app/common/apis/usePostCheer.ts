import { useMutation } from "@tanstack/react-query";
import client from "@/common/utils/client";

const postCheer = async (university: string) => {
  const response = await client.post("/cheer", {
    university: university,
  });
  return response.data;
};

export const usePostCheer = (university: string) => {
  return useMutation({
    mutationFn: () => postCheer(university),
  });
};