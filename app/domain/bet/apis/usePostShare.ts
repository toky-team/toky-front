import { useMutation } from '@tanstack/react-query';

// TODO
const postShare = async () => {
  return {};
};

export const usePostShare = () => {
  return useMutation({
    mutationFn: postShare,
  });
};
