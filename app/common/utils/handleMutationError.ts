import { isAxiosError } from 'axios';

import { useToast } from '@/common/hooks/useToast';

const useHandleMutationError = () => {
  const { openToast } = useToast();

  const onError = (error: Error, customMessage?: string) => {
    if (isAxiosError<{ message: string }>(error)) {
      openToast({
        message: customMessage || error.response?.data.message || '에러가 발생했어요',
      });
    }
  };

  return { onError };
};

export default useHandleMutationError;
